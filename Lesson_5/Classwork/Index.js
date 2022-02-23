// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNum = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num1 > num2 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

minNum(7,3,2);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNum = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num1 < num2 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxNum(1, 17, 10);

// - створити функцію яка повертає найбільше число з масиву

let arrNumbers = [22, 31, 1, -11, 0, 12, 78, -54];

let arrMaxNum = (numbers) => {
    let max = numbers[0];
    for (let number of numbers) {
        if (number > max) {
            max = number
        }
    }
    return max;
}

console.log(arrMaxNum(arrNumbers));

// - створити функцію яка повертає найменьше число з масиву

let arrMinNum = (numbers) => {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrMinNum(arrNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let numOperations = [1, 5, 7, 11];

let numSummary = (numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;
}

console.log(numSummary(numOperations));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let numMiddle = (numbers) => {
    let middle = 0;
    for (let number of numbers) {
        middle = middle + number;
    }
    return middle / numbers.length;
}

console.log(numMiddle(numOperations));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let numMinMax = (...numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (let number of numbers) {
        if (max < number) {
            max = number;
        }
        if (min > number) {
            min = number;
        }

    }
    console.log(max);
    return min;
}

console.log(numMinMax(12, 774, 81, 0, 3));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrRandom1 = (length) => {
    let mass = [];
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(Math.random()*10));
    }
    return mass;
}

console.log(arrRandom1(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrRandom2 = (length, limit) => {
    let mass = [];
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(Math.random()*limit));
    }
    return mass;
}

console.log(arrRandom2(10, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrNum = [1, 2, 3, 4, 5];

let arrReverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arr[i];
    }
    return newArr;
}

console.log(arrReverse(arrNum));
