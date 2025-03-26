// Fibonacci using setInterval
function printFibonacci(limit) {
    let a = 0, b = 1, count = 0;
  
    const interval = setInterval(() => {
    console.log(b);
    [a, b] = [b, a+b];  //calculate next number
    count++;

    if (count >= limit) {
       clearInterval(interval); 
       console.log('Finished printing Fibonacci sequence.');
      }
    }, 1000);
  }
  printFibonacci(10);


//  Fibonacci using setTimeout
function printFibonacciTimeouts(limit, a = 0, b = 1, count = 0) {
    if (count >= limit) {
      console.log('Finished printing Fibonacci sequence.');
      return;    // Exit when the limit is reached
    }
console.log(b);

setTimeout(() => printFibonacciTimeouts(limit, b, a+b, count + 1), 1000);
}
printFibonacciTimeouts(10);