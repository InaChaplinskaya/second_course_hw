// task 1
const numbs= [1, 5, 4, 10, 0, 3 ];
for (let i=0; i< numbs.length; i++){
    console.log(numbs[i]);
    if (numbs[i] === 10){
        break
    }
}
// task 2
console.log([1, 5, 4, 10, 0, 3].indexOf(4))
// task 3
const arr=[1, 3, 5, 10, 20];
console.log(arr.join(''));
// task 4
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
let newArr=[];
for(let i=0; i < 3; i++){
    newArr[i] =[];
    for (let j = 0; j < 3; j++){
        newArr[i].push(1);
    }
}
console.log(newArr);
// task 5
let h=[1, 1, 1]
h.push(2, 2, 2);
console.log(h)
// task 6
let l= [9, 8, 7, 'a', 6, 5];
let k= l.sort();
console.log(k);
console.log(k.pop());
console.log(k);
// task 7
let j = [9, 8, 7, 6, 5];
let userGuess = prompt("Угадайте число из списка:");
if (j.includes(Number(userGuess))){
    alert("Угадал");
} else {
    alert("Не угадал");
}
// task 8
let p = 'abcdef';
let c = p.split('').reverse().join('');
console.log(c);
// task 9
const arr =[[1, 2, 3],[4, 5, 6]];
const flatArr = arr.flat();
console.log(flatArr);
// task 10
let numbers = [3, 7, 1, 9, 5, 4, 2, 8, 6, 10];
for (let i = 0; i < numbers.length - 1; i++ ){
    console.log(numbers[i] + numbers[i + 1]);
}
// task 11
function getSquaredNumbers(arr) {
    return arr.map(num => num * num );
}
console.log(getSquaredNumbers([2, 3, 4]))
// task 12
function getMap2(array) {
    return array.map(el => el.length);
}
console.log(getMap2(['мир', 'свет', 'солнце']))
// task 13
function filterNegative(array) {
    return array.filter(value => value < 0);
}
console.log(filterNegative([2, -2, 8, -8 ]))