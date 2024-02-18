// task 1
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

// task 2
let i = 1;
do {
    console.log(i);
    i++;
    while (i <= 5);
}

// task 3
let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

// task 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};
for (let key in obj) {
    alert(`${key} — зарплата  ${obj[key]} долларов`);
}

// task 5
let n = 1000;
let num = 0;
while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);

// task 6
let firstFriday = 5;
for (let i = firstFriday; i < 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`)
}
