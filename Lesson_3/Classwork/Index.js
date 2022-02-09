// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbers = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (let number of numbers) {
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 === 1) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 1) {
//         console.log(numbers[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten';
//     }
//     console.log(numbers[i]);
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//--------------1---------------------
// let i = numbers.length - 1;
// while (i >= 0) {
//     console.log(numbers[i]);
//     i--;
// }

//--------------2---------------------
// for (let i = numbers.length - 1; i >= 0; i--) {
//      console.log(numbers[i]);
// }

//--------------3---------------------
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (i % 2 === 1) {
//         console.log(numbers[i]);
//     }
//     i--;
// }

//--------------4---------------------
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (i % 2 === 1) {
//         console.log(numbers[i]);
//     }
// }

//--------------5---------------------
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--;
// }

//--------------6---------------------
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

//--------------7---------------------
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten';
//     }
//     console.log(numbers[i]);
// }
