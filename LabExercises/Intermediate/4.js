// Basic camelCase function using split() and map())
function camelCase(cssProp) {
  let [first, ...rest] = cssProp.split('-'); // Extract the first word separately
  return first + rest.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    /* return cssProp
      .split('-') 
      .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      ) 
      .join(''); */
  }
  
  console.log(camelCase('margin-left')); // marginLeft
  console.log(camelCase('background-image')); // backgroundImage
  console.log(camelCase('display')); // display
  
  
  // Using for loop
  function camelCaseForLoop(cssProp) {
    let result = '';
    let capitalizeNext = false;
  
    for (let i = 0; i < cssProp.length; i++) {
      if (cssProp[i] === '-') {
        capitalizeNext = true; 
      } else {
        result += capitalizeNext ? cssProp[i].toUpperCase() : cssProp[i];
        capitalizeNext = false; 
      }
    }
    return result;
  }
  
  console.log(camelCaseForLoop('margin-left')); // marginLeft
  console.log(camelCaseForLoop('background-image')); // backgroundImage
  console.log(camelCaseForLoop('display')); // display
  
  
  // Using for...of loop
  function camelCaseForOfLoop(cssProp) {
    let result = '';
    let capitalize = false;
  
    for (const char of cssProp) {
      if (char === '-') {
        capitalize = true; 
      } else {
        result += capitalize ? char.toUpperCase() : char;
        capitalize = false; 
      }
    }
    return result;
  }
  
  console.log(camelCaseForOfLoop('margin-left')); // marginLeft
  console.log(camelCaseForOfLoop('background-image')); // backgroundImage
  console.log(camelCaseForOfLoop('display')); // display
  
  
  // Using the conditional operator
  function camelCaseTernary(cssProp) {
    return cssProp
      .split('-')
      .map((word, index) =>
        index ? word.charAt(0).toUpperCase() + word.slice(1) : word
      )
      .join('');
  }
  
  console.log(camelCaseTernary('margin-left')); // marginLeft
  console.log(camelCaseTernary('background-image')); // backgroundImage
  console.log(camelCaseTernary('display')); // display
  
  
  // Without the conditional operator 
  function camelCaseIf(cssProp) {
    let parts = cssProp.split('-');
    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
    }
    return parts.join('');
  }
  
  console.log(camelCaseIf('margin-left')); // marginLeft
  console.log(camelCaseIf('background-image')); // backgroundImage
  console.log(camelCaseIf('display')); // display