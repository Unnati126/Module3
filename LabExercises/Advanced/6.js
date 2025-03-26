// add delay method to function.prototype
Function.prototype.delay = function (ms) {
    let originalFunction = this;
    return function (...args) {
        setTimeout(() => {
            originalFunction(...args);
        }, ms);
    };
};

function multiply(a,b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5);


//improve delay using apply for any number of parameters
Function.prototype.delay = function (ms) {
    let originalFunction = this;
    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(this, args);
        }, ms);
    };
};

function add(...nums) {
    console.log(nums.reduce((sum, num) => sum + num, 0));
}

add.delay(1000)(10, 20, 30, 40);


//modilfy multiply to take 4 parameters
function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(1500)(2, 3, 4, 5);