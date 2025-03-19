const basketballGame = {
    score: 0,
    fouls: 0, //Added new property for fouls
  
    freeThrow() {
      this.score++;
      return this; //Added return this to allow chaining
    },
  
    basket() {
      this.score += 2;
      return this;
    },
  
    threePointer() {
      this.score += 3;
      return this;
    },
  
    //New method to add fouls
    foul() {
      this.fouls++;
      return this; 
    },
  
    // New method to display halftime score and fouls
    halfTime() {
      console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls.`);
      return this; 
    },
  
    // New method to display final score and fouls
    fullTime() {
      console.log(`Final score is ${this.score}, with ${this.fouls} fouls.`);
      return this; 
    },
  
    // New method to reset the score and fouls
    reset() {
      this.score = 0;
      this.fouls = 0;
      return this; 
   }
  };
  
  basketballGame
    .reset()             
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .foul()
    .foul()
    .halfTime()
    .threePointer()
    .foul()
    .fullTime();