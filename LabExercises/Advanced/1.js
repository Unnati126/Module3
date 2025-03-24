function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;

    return function () {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter();       // start from = 0, increment by = 0
let counter2 = makeCounter(5);      // start from = 5, increment by = 0
let counter3 = makeCounter(10,2);   // start from = 10, increment by = 2

counter1();
counter1();

counter2();
counter2();

counter3();
counter3();

counter1();