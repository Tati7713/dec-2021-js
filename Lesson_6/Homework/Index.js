// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upperStr1 = str1.toUpperCase();
console.log(upperStr1);

let upperStr2 = str2.toUpperCase();
console.log(upperStr2);

let upperStr3 = str3.toUpperCase();
console.log(upperStr3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

upperStr1 = upperStr1.toLowerCase();
console.log(upperStr1);

upperStr2 = upperStr2.toLowerCase();
console.log(upperStr2);

upperStr3 = upperStr3.toLowerCase();
console.log(upperStr3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

let trimStr = str.trim();
console.log(trimStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strTxt = 'Ревуть воли як ясла повні';

let stringToarray = (str) => str.split (' ');

document.write(stringToarray(strTxt));
console.log(stringToarray(strTxt));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let num = [10,8,-7,55,987,-1011,0,1050,0];

let numStr = num.map(value => value.toString());
console.log(numStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (nums, direction) => {

    if (direction === 'ascending') {
        nums.sort((d1, d2) => d1 - d2);
    }
    if (direction === 'descending'){
        nums.sort((d1, d2) => d2 - d1)
    }
    return nums;
}
console.log(sortNums(nums, 'descending'));



// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
];

// - знайти піковий туз

console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'Ace'));

// - всі шістки

console.log(deck.filter(value => value.value === '6'));

// - всі червоні карти

console.log(deck.filter(value => value.color === 'red'));

// - всі буби

console.log(deck.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

console.log(deck.filter(value => value.value >= '9' && value.cardSuit === 'clubs' || value.value === '10' && value.cardSuit === 'clubs'));
