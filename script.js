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

context = {
    add, subtract, multiply, divide
};

const operate = function(operator, a, b) {
    return operator(a, b);
};

const display = document.querySelector('#display');
var should_clear = true;
var numberPressed = false;

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', () => {
        var number = item.textContent;
        numberPressed = true;
        if (should_clear) {
            display.textContent = number;
            should_clear = false;
        } else if (!should_clear) {
            display.textContent = display.textContent.concat(number);
        };
    });
});

var firstOperand = null;
var secondOperand = null;
var operation = null;

const operators = document.querySelectorAll('.operation');

operators.forEach(item => {
    item.addEventListener('click', () => {
        operationName = item.id;
        decimal.disabled = false;
        console.log(operation, should_clear, numberPressed);
        if (operation && numberPressed) {
            secondOperand = parseFloat(display.textContent);
            result = operate(operation, firstOperand, secondOperand);
            display.textContent = result;
            firstOperand = result;
            operation = null;
            secondOperand = null;
            operators.forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');
            numberPressed = false;
            should_clear = true;
        };

        operation = context[operationName];
        operators.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
        firstOperand = parseFloat(display.textContent);
        should_clear = true;
        numberPressed = false;
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    secondOperand = parseFloat(display.textContent);
    result = operate(operation, firstOperand, secondOperand);
    display.textContent = result;
    firstOperand = result;
    operation = null;
    secondOperand = null;
    operators.forEach(btn => btn.classList.remove('active'));
    decimal.disabled = false;
});

document.querySelector('#clear').addEventListener('click', () => {
    firstOperand = null;
    secondOperand = null;
    operation = null;
    should_clear = true;
    numberPressed = false;
    display.textContent = "Calculator";
    operators.forEach(btn => btn.classList.remove('active'));
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    display.textContent = display.textContent.concat('.');
    decimal.disabled = true;
});