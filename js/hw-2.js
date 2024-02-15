let a, b;

// task 1

a = 10;
alert(a);
a = 20;
alert(a);

// task 2

const yearOfiPhone = 2007;
alert(yearOfiPhone);

// task 3

const nameOfCreator = 'Брендан Эйх';
alert(nameOfCreator);

// task 4

a = 10;
b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// task 5

a = 2;
const result = a ** 5;
alert(result);

// task 6

a = 9;
b = 2;
alert(a % b);

// task 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// task 8

const age = prompt('Сколько вам лет?');
alert(age);

// task 9

const user = {
    name: 'Inna',
    age: 24,
    isAdmin: true,
}

// task 9.1

user['city of residence'] = 'Nowosibirsk';

// task 9.2

user.age = 25;

// task 9.3

delete user['city of residence'];

// task 9.4

const info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

// task 10

const name = prompt('Введите ваше имя');
alert(`Привет, ${name}!`);
