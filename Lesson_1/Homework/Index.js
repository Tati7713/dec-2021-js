// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let var_1 = 'hello';
let var_2 = 'owu';
let var_3 = 'com';
let var_4 = 'ua';
let var_5 = 1;
let var_6 = 10;
let var_7 = -999;
let var_8 = 123;
let var_9 = 3.14;
let var_10 = 2.7;
let var_11 = 16;
let var_12 = true;
let var_13 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let general_1 = var_1 + '\n' + var_2 + '\n' + var_3 + '\n' + var_4 + '\n' + var_5 + '\n' + var_6 + '\n' + var_7 + '\n' + var_8 + '\n' + var_9 + '\n' + var_10 + '\n' + var_11 + '\n' + var_12 + '\n' + var_13;

console.log(general_1);
alert(general_1);
document.write(general_1);

// - Переприсвоїти кожній змінній з завдання значення на довільне.

var_1 = 'bye';
var_2 = '321';
var_3 = false;
var_4 = 'true';
var_5 = 1.1;
var_6 = 'I';
var_7 = 'want';
var_8 = 'to';
var_9 = 'sleep';
var_10 = '00:04';
var_11 = -0.99999999;
var_12 = 'true 774.4';
var_13 = true;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let general_2 = var_1 + '\n' + var_2 + '\n' + var_3 + '\n' + var_4 + '\n' + var_5 + '\n' + var_6 + '\n' + var_7 + '\n' + var_8 + '\n' + var_9 + '\n' + var_10 + '\n' + var_11 + '\n' + var_12 + '\n' + var_13;
console.log(general_2);
alert(general_2);
document.write(general_2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Khitushka';
let middleName = 'Tetiana';
let lastName = 'Oleksandrivna';
let person = (`<br/>${firstName} ${middleName} ${lastName}`);

document.write(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('Імя', '');
let surname = prompt('По-Батькові', '');
let age = prompt('Вік', '');

alert('Вітаю ' + name + ' ' + surname + ', тобі ' + age + ' років!');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
console.log(5 < 6);
// 5 ? 6 -> false
console.log(5 > 6);
// 5 ? 6 -> false
console.log(5 >= 6);
// 5 ? 6 -> false
console.log(5 === 6);
// 10 ? 10 -> true
console.log(10 === 10);
// 10 ? 10 -> true
console.log(10 >= 10);
// 10 ? 10 -> false
console.log(10 !== 10);
// 10 ? 10 -> false
console.log(10 > 10);
// 10 ? 10 -> false
console.log(10 < 10);
// 123 ? '123' -> false
console.log(123 === '123');
// 123 ? '123' -> true
console.log(123 == '123');
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); "205" - за допомогою оператора "+" перетворює вираз у стрінгове значення
// document.write(str - a + "<br/>"); "15" - всі інші оператори виконують свої прямі функції, перетворивши стрінгове
// document.write(str * "2" + "<br/>"); "40"  значення в числове, а саме 20 - 5 = 15; 20 * 2 = 40; 20 / 2 = 10.
// document.write(str / 2 + "<br/>"); "10"