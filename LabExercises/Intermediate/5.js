let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

console.log('\n')

let fixedTwenty = twentyCents.toFixed(2);   //using toFixed() method can convert numbers into strings
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen); 

console.log('\n')

function currencyAddition(float1, float2) {      // Math.round() method can round numbers to the nearest integer
    return Math.round((float1 + float2) * 100) / 100;
  }
console.log(currencyAddition(0.1, 0.2)); 
console.log(currencyAddition(0.15, 0.25)); 
console.log(currencyAddition(1.005, 0.005)); 

console.log('\n')

function currencyOperation(float1, float2, operation) {    //using cutrrencyOperation() function to perform basic arithmetic operations
    let result;
switch (operation) {
    case '+':
        result = float1 + float2;
            break;
    case '-':
        result = float1 - float2;
            break;
    case '*':
        result = float1 * float2;
            break;
    case '/':
        result = float1 / float2;
            break;
      default:
    throw new Error('Invalid operation. Use +, -, *, or /.');
    }
    return Math.round(result * 100) / 100;
    }
console.log(currencyOperation(0.1, 0.2, '+'));
console.log(currencyOperation(0.3, 0.1, '-')); 
console.log(currencyOperation(0.3, 0.2, '*')); 
console.log(currencyOperation(0.3, 0.1, '/'));

console.log('\n')

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {    //using currencyOperationExtended() function to perform arithmetic operations with a specified number of decimal places
    let factor = Math.pow(10, numDecimals);
    let result;
switch (operation) {
    case '+':
        result = (float1 * factor + float2 * factor) / factor;
            break;
    case '-':
        result = (float1 * factor - float2 * factor) / factor;
            break;
    case '*':
        result = (float1 * factor * float2 * factor) / (factor * factor);
            break;
    case '/':
        result = (float1 * factor) / (float2 * factor);
            break;
      default:
        throw new Error('Invalid operation. Use +, -, *, or /.');
    }
    return Math.round(result * factor) / factor;
  }
  console.log(currencyOperationExtended(0.1, 0.2, '+', 3)); 
  console.log(currencyOperationExtended(0.12345, 0.54321, '+', 5));
  console.log(currencyOperationExtended(0.1, 0.2, '*', 4)); 
  console.log(currencyOperationExtended(1.005, 0.005, '+', 3)); 
  
  console.log('\n')

  console.log(0.3 == currencyAddition(0.1, 0.2)); 
  console.log(0.3 == currencyOperation(0.1, 0.2, '+')); 