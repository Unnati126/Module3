function debounce(func, ms = 1000) {   // Debounce function with a 1000ms delay
    let timer; 
  
    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {  // Set a new timer to delay the function execution
        func.apply(this, args); 
      }, ms);
    };
  }
  

  function printMe(msg) {   // Function to be debounced with an argument
    console.log(`Printing debounced message: ${msg}`);
  }
  
  
  const debouncedPrintMe = debounce(printMe, 1000);  //Debounce the printMe function with a 1000ms delay
  
  setTimeout(() => debouncedPrintMe('First call'), 100);
  setTimeout(() => debouncedPrintMe('Second call'), 200);
  setTimeout(() => debouncedPrintMe('Third call'), 300);
  
  
  const debouncedLonger = debounce(printMe, 2000);  // Example with a custom debounce time (2 seconds)
  setTimeout(() => debouncedLonger('Custom delay (2s)'), 400);