// Base DigitalClock Class
class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000); 
    }
  }
  
  // PrecisionClock Extends DigitalClock with custom interval (precision)
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix); 
      this.precision = precision; 
    }
  
    start() {
      this.display(); 
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  // AlarmClock - Extends DigitalClock with wakeup time
  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "03:11") {
      super(prefix); 
      this.wakeupTime = wakeupTime; 
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  
      if (`${hours}:${mins}` === this.wakeupTime) {
        console.log("⏰ Wake Up!");
        this.stop(); 
      }
    }
  
    start() {
      this.display(); 
      this.timer = setInterval(() => this.display(), 1000); 
    }
  }
  
  
  // Standard Digital Clock
  const myClock = new DigitalClock('My Clock:');
  myClock.start();
  setTimeout(() => myClock.stop(), 5000); 
  
  // Precision Clock with 500ms tick
  const fastClock = new PrecisionClock('Fast Clock:', 500);
  fastClock.start();
  setTimeout(() => fastClock.stop(), 5000); 
  
  // Alarm Clock that stops at 07:00 (or your set time)
  const alarmClock = new AlarmClock('Alarm Clock:', '03:10');
  alarmClock.start();