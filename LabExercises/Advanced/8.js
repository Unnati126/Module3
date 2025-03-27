// Decorator function to validate that all arguments are strings
function validateStringArg(fn) {
    return function (...args) {
    
      if (!args.every(arg => typeof arg === 'string')) {
        throw new Error("All arguments must be strings!");
      }
      return fn(...args); 
    };
  }
  
  // Function to order multiple items
  function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
  }
  
  // Create a decorated version of the function
  const validatedOrderItems = validateStringArg(orderItems);
  
  // Testing with try-catch for error handling
  try {
    console.log(validatedOrderItems("Apple Watch")); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(validatedOrderItems("Laptop", "Phone", "Tablet")); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(validatedOrderItems(123)); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(validatedOrderItems("Book", 42, "Pen")); 
  } catch (error) {
    console.error(error.message);
  }
  