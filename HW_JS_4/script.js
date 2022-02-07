//1.
console.log('Exercise 1');

function getLocation () {
    return this.continent + ' - ' + this.country
}

let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
    getLocation: getLocation
  }
  console.log(developer1.getLocation());
 
  let developer2 ={
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
    getLocation: getLocation
  }
  console.log(developer2.getLocation());


  //2.
  console.log('Exercise 2');
  
  let list = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 30, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'Y.', country: 'Belarus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];

  function getNumberMatches(list, value) {
    let matches = 0;
    list.forEach(user => {
      const values = Object.values(user);

      values.forEach(matchValue => {
        if(matchValue === value) { matches += 1; }
      })
    })

    if(matches === 0) { matches = "Совпадений не найдено" }

    return matches;
  };
    
const answer = getNumberMatches(list, 30);

console.log(answer);

  //3.
  console.log('Exercise 3');

  const users = [
    { name: 'Ivan', year: 1994 },
    { name: 'Olga', year: 1998 },
    { name: 'Vlad', year: 1988 },
    { name: 'Vadim', year: 2002 },
    { name: 'Ira', year: 1991 },
    { name: 'Svetlana', year: 2004 },
    ]

    users.forEach(function(item) {
        console.log(item);
    })

     const newUsers = users.map(item => ({...item, age: 2022 - item.year})) 
    console.log(newUsers);

    //4.
    console.log('Exercise 4');

    let salariesCompany = {
      Ivan: 1200,
      Irina: 800,
      Alex: 1050,
      Anton: 1460,
      Marta: 1140
    }

    function getSalaryReport(salaries) {
      const entries = Object.entries(salaries);
      let sum = entries.reduce((previousValue, currentValue) => previousValue + currentValue[1], 0);
      let averageSalary = sum / entries.length;
      let hasMaxSalary = '';
      let hasMinSalary = '';

      for (let item of entries) {
        const [name, value] = item
        if (!salaries[hasMaxSalary] || (salaries[hasMaxSalary] < value)) {
          hasMaxSalary = name
        }
        if (!salaries[hasMinSalary] || (salaries[hasMinSalary] > value)) {
          hasMinSalary = name
        }
      }

      return [averageSalary, hasMaxSalary, hasMinSalary]
    }
    const [average, maxSalary, minSalary] = getSalaryReport(salariesCompany)
    console.log(average, maxSalary, minSalary);
