const delayMsg = (msg) => {  //arrow function of delayMsg
    console.log(`This message will be printed after a delay: ${msg}`);
  };
  

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');   //scheduled messages with different delays
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');  //prints immediately because it is called directly without setTimeout

const fifthTest = setTimeout(delayMsg, 11000, '#5: Delayed by 11 seconds');  // fifth test

clearTimeout(fifthTest);  //cancel the fifth test