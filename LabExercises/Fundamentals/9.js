let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports];  //created moresports
moreSports.push('Tennis');  //pushed
moreSports.unshift('Basketball');  //unshift 

let dog2 = dog1;  //created dog2
dog2 = 'Elmo';   //created dog2 with new value

let cat2 = {...cat1}; //created cat2
cat2.name = 'Mittens';  //changed name of cat2


console.log('Original Team Sports:', teamSports);
console.log('More Sports', moreSports);

console.log('Original Dog 1:', dog1);
console.log('Dog 2:', dog2);

console.log('Original Cat 1:', cat1);
console.log('Cat 2:', cat2);