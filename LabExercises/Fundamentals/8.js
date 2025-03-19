//using for...in loop to print the details of a city object
function printCityDetails(city) {
    for (let key in city) {
      console.log(`${key}: ${city[key]}`);
    }
  }

  const sydney = {
    Name: 'Sydney',
    Population: 5_121_000,
    State: 'NSW',
    Founded: '26 January 1788',
    TimeZone: 'Australia/Sydney'
  };
  
  printCityDetails(sydney);

console.log('\n')

// New object for a different city (New York)
const newYork = {
    Name: 'New York City',
    Population: 8_336_817,
    State: 'New York',
    Founded: '1624',
    TimeZone: 'America/New_York',
    Nickname: 'The Big Apple'
  };
  
  printCityDetails(newYork);