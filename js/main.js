
// task 8

function getSeason(month) {
    let monthNumber = Number(month)

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима')
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна')
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето')
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень')
            break;
        default:
            console.log('Такого месяца не существует')
            break;
    }
}

document.getElementById('seasons').addEventListener('click', () => {
    const input = prompt('Введите номер месяца')
    getSeason(input)
})

// task 11

function fruitGame() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let firstGuess = prompt("Чему равнялся первый элемент массива?").toLowerCase();
    let lastGuess = prompt("Чему равнялся последний элемент массива?").toLowerCase();
    if (firstGuess === fruits[0].toLowerCase() && lastGuess === fruits[fruits.length - 1].toLowerCase()) {
        alert("Поздравляем! Вы угадали оба слова.")
    } else if (firstGuess === fruits[0].toLowerCase() || lastGuess === fruits[fruits.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы не угадали ни одного слова.");
    }
}

document.getElementById('words').addEventListener('click', () => {
    fruitGame()
})
