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

function templateElement({ dt, main: { temp }, weather }) {
  return `
    <div class="element-wrapper">
      <div class="data">${new Date(dt*1000)}</div>
      <i class="${getWeatherIcon(weather[0].main)}"></i>
      <div class="temp">${Math.round(temp - 273.15)} °C</div>
    </div>
  `
}

// TODO finish this
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
        <i class="fa fa-clock"></i> 00:00
      </div>
    </div>

    <div class="temperature">
      <i class="fa fa-light fa-moon fa-3x mb-20"></i>
      <br>
      -3
    </div>

    <div class="wind-wrapper">
      <div class="compass">
        East
      </div>

      <div class="windpower">
        12 m/s
      </div>
    </div>
   `
}


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
