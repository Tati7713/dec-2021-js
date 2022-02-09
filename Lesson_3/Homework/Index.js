// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [
//     [2, 7, -14, 21, 0],
//     ['Червоний', 'Чорний', 'Зелений', 'Блакитний', 'Білий'],
//     ['Червоний', 75, true, 'Білий', false]
// ]
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
//
// arr[0] = 13;
// arr[1] = 'moon';
// arr[2] = false;
// arr[3] = -121;
// arr[4] = 'true';
//
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// document.write(`<div>`)
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> txt </div>`)
// }
//
// document.write(`</div>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write(`<div>`)
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> ${i} - txt </div>`)
// }
//
// document.write(`</div>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// document.write(`<div>`)
//
// i = 0;
// while (i < 20) {
//     document.write(`<h1>txt</h1>`)
//     i++;
// }
//
// document.write(`</div>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// document.write(`<div>`)
//
// i = 0;
// while (i < 20) {
//     document.write(`<h1>txt (${i})</h1>`)
//     i++;
// }
//
// document.write(`</div>`)

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [1, 12, -10, 85, 5, 22, 74, 81, 23, 0];
//
// for (let number of numbers) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['зелений', 'синій', 'рожевий', 'жовтий', 'коричневий', 'білий', 'чорний', 'червоний', 'фіолетовий', 'померанчевий'];
//
// for (let string of arr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['рожевий', 45, false, [42, 17, 22], 'true', true, 0, -11, '-222', 1];
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['рожевий', 45, false, 15, 'true', true, 0, -11, '-222', 1];
//
// for (let arrElement of arr) {
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['рожевий', 45, false, 15, 'true', true, 0, -11, '-222', 1];
//
// for (let arrElement of arr) {
//     if (typeof arrElement === "number") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = ['рожевий', 45, false, 15, 'true', true, 0, -11, '-222', 1];
//
// for (let arrElement of arr) {
//     if (typeof arrElement === "string") {
//         console.log(arrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
//
// arr[0] = 13;
// arr[1] = 'moon';
// arr[2] = false;
// arr[3] = -121;
// arr[4] = 'true';
// arr[5] = 113;
// arr[6] = 'sun';
// arr[7] = 'false';
// arr[8] = 0;
// arr[9] = true;
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`${i} </br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`${i} </br>`);
//     }
// }