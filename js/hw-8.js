// task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people);
// task 2
function isPositive(num) {
return num > 0
}
function isMale(prop) {
return prop.gender === "male"
}
function filter(array, callback) {
    const resultArray = [];
    array.forEach(element => {
        if (callback(element)) {
            resultArray.push(element)
        }
    });
    return resultArray
}
console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
console.log(filter(people, isMale));
// task 3
const startTime = new Date();
const interval = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate);
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
}, 30000);
// task 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});
// task 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log('Привет, ${name}!');
}
delayForSecond(() => sayHi('Глеб'))