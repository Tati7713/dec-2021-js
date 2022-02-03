// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let rand = Math.floor(Math.random() * 10);
console.log(rand);

let arrNum = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)

];
console.log(arrNum);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Дракула',
    pages: 324,
    genre: 'Містичний роман'
}
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: 'Дракула',
    pages: 324,
    genre: 'Містичний роман',
    author: 'Брем Стокер'
}
console.log(book1);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let arrBook = [
    {name: 'Дракула', pages: 324, genre: 'Містичний роман', author: 'Брем Стокер'},
    {name: 'Джен Ейр', pages: 587, genre: 'Роман', author: 'Шарлота Бронте'},
    {name: 'Сяйво', pages: 457, genre: 'Психологічні жахи', author: 'Стівен Кінг'},
    {name: 'Тіні Чорнобиля', pages: 437, genre: 'Наукова фантастика', author: 'Єжи Тумановські'},
    {name: 'Божественна комедія', pages: 581, genre: 'Епос', author: 'Данте Алігєрі'},
]

console.log(arrBook[0]);
console.log(arrBook[1]);
console.log(arrBook[2]);
console.log(arrBook[3]);
console.log(arrBook[4]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let h = 23;
let w = 10;
let s = h * w;

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let hC = 10;
let dC = 4;
let v = Math.PI * Math.pow((dC / 2), 2) * hC;

console.log(v);

// 7. У прямокутного трикутника дві сторони, n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

console.log(k);
