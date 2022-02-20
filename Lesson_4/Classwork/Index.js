// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNum (num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num1 > num2 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

minNum(3,7,1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNum (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num1 < num2 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxNum(13, 88, 2);

// - створити функцію яка повертає найбільше число з масиву

let arrNumbers = [22, 31, 1, -11, 0, 12, 78, -54];

function arrMaxNum (numbers) {
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

function arrMinNum (numbers) {
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

function numSummary (numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;
}

console.log(numSummary(numOperations));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function numMiddle (numbers) {
    let middle = 0;
    for (let number of numbers) {
        middle = middle + number;
    }
    return middle / numbers.length;
}

console.log(numMiddle(numOperations));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numMinMax (...numbers) {
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

console.log(numMinMax(7, 14, 4, 11, 10));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function arrRandom1 (length) {
    let mass = [];
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(Math.random()*50));
    }
    return mass;
}

console.log(arrRandom1(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function arrRandom2 (length, limit) {
    let mass = [];
    for (let i = 0; i < length; i++) {
        mass.push(Math.round(Math.random()*limit));
    }
    return mass;
}

console.log(arrRandom2(10, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrNum = [1, 2, 3, 4, 5];

function arrReverse (numbers) {
    numbers.reverse();
    return numbers;
}

console.log(arrReverse(arrNum));

