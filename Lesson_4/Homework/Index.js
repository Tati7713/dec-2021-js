// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sPryamokutnyka (a, b) {
    return a * b;
}
console.log(sPryamokutnyka(20, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sKola (r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(sKola(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCylindru (h, r) {
    return 2 * Math.PI * r * (r + h);
}

console.log(sCylindru(2,3));

// - створити функцію яка приймає масив та виводить кожен його елемент

let num = [1, 2, 3, 4, 5];

function iteratorOfArr (arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

iteratorOfArr(num);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pTxt (txt) {
    document.write(`<p>${txt}</p>`)
}

pTxt('Any text');
pTxt('Very interesting');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator (element) {
    document.write(`<ul>`)
    document.write(`<li>${element}</li>`)
    document.write(`<li>${element}</li>`)
    document.write(`<li>${element}</li>`)
    document.write(`</ul>`)
}

listCreator('item 1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreator2 (elements, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${elements}</li>`)
    }
    document.write(`</ul>`)
}

listCreator2('item', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [45487, true,'asd',54578,false];

function arrayCreator (arr) {
    document.write(`<ol>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ol>`)
}

arrayCreator(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let personsArray = [{id: 1, name: 'Vasya', age: 45}, {id: 2, name: 'Masha', age: 21}, {id: 3, name: 'Kolya', age: 54}];

function objPerson (arr) {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

objPerson(personsArray);
