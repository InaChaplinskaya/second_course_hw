// task 1
console.log('js'.toUpperCase());
// task 2
function yourFn(array, str) {
    return array.filter((item) => item.toLowerCase().startsWith(str.toLowerCase()))
}
console.log(yourFn(['Роза', 'Ромашка', 'Одуванчик'], 'Ро'))
// task 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// task 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));
// task 5
Math.floor(Math.random() * 11);
// task 6
function getRandomArray(max) {
    const size = Math.floor(max / 2)
    return [...Array(size)].map(() => Math.floor(Math.random() * max ))
}
console.log(getRandomArray(6))
// task 7
function getRandomNumberRange(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomNumberRange(2, 58));
// task 8
let dateNow = new Date();
console.log(dateNow.toLocaleDateString('ru-RU'));
// task 9
const newDate = new Date();
newDate.setDate(newDate.getDate() + 73);
console.log(newDate)
// task 10
function printDate() {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    const date = new Date()
    const lhs = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${daysOfWeek[date.getDay()]}`
    const rhs = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return `${lhs}\n${rhs}`
}
console.log(printDate())
