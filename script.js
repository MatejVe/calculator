const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    return operator(a, b);
};

const display = document.querySelector('#display');
console.log(display);

var displayValue = display.textContent;
console.log(displayValue);