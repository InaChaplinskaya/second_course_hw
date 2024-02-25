// task 1

function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(getMin(8, 6))

// task 2

function oddEven(numOne) {
    if (n % 2 == 0) {
        return 'Четное число'
    } else {
        return 'Нечетное число'
    }
}

console.log(oddEven(167))

// task 3

function printSquare(num) {
    console.log(num ** 2);
}

printSquare(7)

// task 4

function helloUser() {
    let age = prompt('Сколько вам лет?')

    if (age < 0) {
        alert('Вы ввели неверное значение')
    } else if (age <= 12) {
        alert('Привет Друг')
    } else {
        alert('Добро Пожаловать')
    }
}

helloUser()

// task 5

function multiplyNumbers(a, b) {
    if (isNan(a) || isNan(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(multiplyNumbers(5, 6))
console.log(multiplyNumbers(5, "error"))

// task 6

function cubeNumber() {
    let num = prompt("Введите число:");
    num = Number(num);

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется $(num ** 3}`;
    }
}

console.log(cubeNumber())

// task 7

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimetr() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimetr: getPerimetr,
};
const circle2 = {
    radius: 15,
    getArea: getArea,
    getPerimetr: getPerimetr,
};

console.log(circle1.getPerimetr())
console.log(circle1.getArea())

console.log(circle2.getPerimetr())
console.log(circle2.getArea())

// task 8
// goto main.js
