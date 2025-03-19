// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  
  // Add canDrive method to the constructor's prototype
  Person.prototype.canDrive = function() {
    return this.age >= 18;
  };
  
  // Create persons using the constructor function
  const person1 = new Person('Veronica', 25);
  const person2 = new Person('Alice', 16);
  
  console.log('Person 1:', person1);
  console.log(`${person1.name} can drive:`, person1.canDrive());
  
  console.log('Person 2:', person2);
  console.log(`${person2.name} can drive:`, person2.canDrive());
  
  // Class version
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  
    canDrive() {
      return this.age >= 18;
    }
  }
  
  // Create a person using the class
  const person3 = new PersonClass('Charlie', 28);
  console.log('Person 3:', person3);
  console.log(`${person3.name} can drive:`, person3.canDrive());
  