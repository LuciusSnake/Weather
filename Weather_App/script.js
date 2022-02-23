const listWrapperElement = document.querySelector('.list-wrapper')
const frontBlockElement = document.querySelector('.front-block')

const WEATHER = {
  CLOUDS: "Clouds",
  SNOW: "Snow",
  RAIN: "Rain"
}

const WIND_SIDE = {
  NORTH: "North",
  EAST: "East",
  SOUTH: "South",
  WEST: "West"
}

const MONTH_NAMES = [
  "Jan", 
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

// --------------------------------------------------------------------------------------------------------------------------------


function fetchData(url, method, callback) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = () => {
    if(xhr.status == '200') {
      callback(xhr.response)
    }
  }

  xhr.onerror = () => {
    console.error(xhr.status + ' ' + xhr.statusText);
  }

  xhr.send()
}

// --------------------------------------------------------------------------------------------------------------------------------
function currentTime() {
    const data = new Date();
    let hours = transformTime(data.getHours());
    let minutes = transformTime(data.getMinutes());
    
    return `${hours}` + " " + ":" + " " + `${minutes}`
    
}

function transformTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatAMPM(date) {
  let hours = date.getHours();
  let ampm = hours >= 12 ? 'p.m' : 'a.m';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let strTime = hours + ampm;

  return strTime;
}

function templateDate() {
  const data = new Date();
  let day = transformTime(data.getDay());
  let month = MONTH_NAMES[data.getMonth()];
  let hours = formatAMPM(data);  

  return day + ' ' + month + ' ' + hours
}

// -----------------------------------------------------------------------------------------------------------------

function getWindSide(deg) {
  if(deg >= 315 && deg < 45) {
    return WIND_SIDE.SOUTH
  } else if(deg >= 45 && deg < 135) {
    return WIND_SIDE.EAST
  } else if(deg >= 135 && deg < 225) {
    return WIND_SIDE.NORTH
  } else if(deg >= 225 && deg < 315) {
    return WIND_SIDE.WEST
  }
}

function getWeatherIcon(weather) {
  switch (weather) {
    case WEATHER.CLOUDS:
      return "fa fa-cloud";
    
    case WEATHER.RAIN:
      return "fa fa-cloud-rain";

    case WEATHER.SNOW:
      return "fa fa-snowflake";
  }
}

// ---------------------------------------------------------------------------------------------------------------------------

function templateElement({ dt, main: { temp }, weather }) {
  return `
    <div class="element-wrapper">
      <div class="data">${templateDate()}
      </div>
      
      <i class="${getWeatherIcon(weather[0].main)}"></i>
      <div class="temp">${Math.round(temp - 273.15)} °C</div>
    </div>
  `
}

function templateTodayWeather(data) {
  const {
    name: city,
    sys: { country },
    dt: date,
    weather,
    main: { temp, feels_like },
    wind: { deg, speed }
  } = data;

   return `
    <div class="land-and-time">
      <div class="land">
        ${city}, ${country}
      </div>
      <div class="time">
        <i class="fa fa-clock"></i> ${currentTime()}
      </div>
    </div>
    <div class="temperature-icon">
        <i class="${getWeatherIcon(weather[0].main)}"></i>       
    </div>
    <div class="temperature">
        ${Math.round(temp - 273.15)} °C
    </div>
    <div class="temp-feels-like">
        Feels like ${Math.round(feels_like - 273.15)} °C
    </div>
    <div class="wind-wrapper">
      <div class="compass">
        ${getWindSide(deg)}
      </div>
      <div class="windpower">
      <i class="fa fa-solid fa-wind"></i> ${speed} m/s
      </div>
    </div>
   `
}

// --------------------------------------------------------------------------------------------------------------------------------

fetchData('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247', 'GET', (response) => {
  const data = JSON.parse(response)

  data.list.forEach((item) => {
    listWrapperElement.innerHTML += templateElement(item)
  });
});

fetchData('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247', 'GET', (response) => {
  const data = JSON.parse(response)

  frontBlockElement.innerHTML = templateTodayWeather(data);
});