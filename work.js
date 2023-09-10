import { numbers, persons, numbersToDelete } from './utils.js';

// loops
// for (let i = 0; i <= persons.length - 1; i++) {
//     console.log(persons[i]);
// }
// console.log('work');

// persons.forEach((person) => console.log(person));

let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i + ' is next number');
//     i++;
// } while (i < 5);

// const name = 'dawid';
// let arr = [];

// for (let char in name) {
//     arr.push(name[char]);
// }

// console.log(arr.reverse().join(''));

// const reversedString = name.split('').reverse().join('');
// console.log(reversedString);

// "Jakie jest łączne saldo na Twoim koncie bankowym po pięciu miesiącach,
// jeśli co miesiąc wpłacasz 1000 dolarów, a Twoje miesięczne wydatki wynoszą 500 dolarów?"

// let time = 5;
// let earnings = 1000;
// let expensive = 500;
// let saldo = 0;

// for (let i = 1; i <= time; i++) {
//     saldo += earnings - expensive;
//     console.log(`Saldo po ${i} miesiącu: ${saldo}`);
// }

// "Załóżmy, że masz listę produktów w sklepie internetowym.
// Jakie jest najprostsze i najbardziej efektywne podejście do wyświetlenia nazw wszystkich
// produktów z tej listy za pomocą pętli?"

// const products = [
//     { item: 'Książka', price: 29.99, stock: { available: true, supply: 50 } },
//     {
//         item: 'Telewizor',
//         price: 999.99,
//         stock: { available: true, supply: 10 },
//     },
//     { item: 'Telefon', price: 699.99, stock: { available: true, supply: 20 } },
//     { item: 'Laptop', price: 1499.99, stock: { available: false, supply: 0 } },
//     { item: 'Kamera', price: 399.99, stock: { available: true, supply: 5 } },
//     { item: 'Słuchawki', price: 99.99, stock: { available: true, supply: 15 } },
//     { item: 'Myszka', price: 19.99, stock: { available: true, supply: 30 } },
//     { item: 'Głośniki', price: 79.99, stock: { available: false, supply: 0 } },
//     {
//         item: 'Smartwatch',
//         price: 249.99,
//         stock: { available: true, supply: 12 },
//     },
//     {
//         item: 'Klawiatura',
//         price: 59.99,
//         stock: { available: true, supply: 25 },
//     },
// ];

// const productListHTML = products
//     .map((product) => `<li>${product.item}</li>`)
//     .join('');

// const factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };
// console.log(factorial(5));
console.log(numbersToDelete);

const newArr = Array.from(new Set(numbersToDelete));
const newArr2 = [...new Set(numbersToDelete)];

const newArrFilter = numbersToDelete.filter(
    (number, index, arr) => arr.indexOf(number) === index
);

console.log(newArr);
console.log(newArr2);
console.log(newArrFilter);
