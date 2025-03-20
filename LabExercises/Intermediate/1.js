function ucFirstLetters(str) {
    return str
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a string
  }
  
  // Test the function with different strings
  console.log(ucFirstLetters("los angeles")); 
  console.log(ucFirstLetters("new york city")); 
  console.log(ucFirstLetters("san francisco")); 
  console.log(ucFirstLetters("hello world")); 