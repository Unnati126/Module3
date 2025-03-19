const westley = {
name: 'Westley',
numFingers: 5
}

const rugen = {
name: 'Count Rugen',
numFingers: 6
}

const inigo = {
firstName: 'Inigo',
lastName: 'Montoya',  //added last name

//updated greeting method to include last name 
greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
console.log(greeting + this.getCatchPhrase(person));
},

//updated to use arrow function and conditional operator
getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "Hope you are doing well after our last meeting."
      : "Nice to meet you."
};

inigo.greeting(westley)
inigo.greeting(rugen)