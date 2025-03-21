const animals = ['Tiger', 'Giraffe']
console.log('Original animals:', animals);


animals.push('Elephant' , 'Lion')  // Add two elements to the end of the array
console.log('Animals added at the end:', animals);


animals.unshift('Zebra' , 'Monkey')  // Add an element to the beginning of the array
console.log('Animals added at the beginning:', animals);


animals.sort()  // Sort alphabetically
console.log('Sorted animals:', animals);


function replaceMiddleAnimal(newValue) {        // Replacing middle animal with a new value
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Cheetah');
console.log('Middle animal replaced:', animals);


function findMatchingAnimals(beginsWith) {    // Find animals that start with specific letter
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
console.log('Animals that start with "T":', findMatchingAnimals('t'));
console.log('Animals that start with "Z":', findMatchingAnimals('z'));