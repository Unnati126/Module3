// base digitalClock class
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

display() {
    let date = newDate();
    ley [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    console.log('${this.prefix} ${hours}:${mins}:${secs}');
}

stop() {
    clearInterval(this.timer);
}

start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
}
}

//PrecisionClock extends DigitalClock with custom interval
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

