const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hourse have passed so far today');


const minutesPassed = today.getHours() * 60 + today.getMinutes();   // Calculate the number of minutes that have passed so far today
console.log(minutesPassed + ' minutes have passed so far today');


const secondsPassed = minutesPassed * 60 + today.getSeconds();  // Calculate the number of seconds that have passed so far today
console.log(secondsPassed + ' seconds have passed so far today');


function printAge(birthDate) {   //calculate and print your age 
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
  
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
  
    console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
  }

const myBirthDate = new Date(2000, 6, 2); 
printAge(myBirthDate);


function daysInBetween(date1, date2) {   //function to calculate the number of days between two dates
    const timeDiff = Math.abs(date2 - date1); 
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
}

const startDate = new Date(2022, 0, 1); 
const endDate = today; 
console.log(`Days between: ${daysInBetween(startDate, endDate)}`);