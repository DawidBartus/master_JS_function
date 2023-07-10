const consoleBeforeImport = () => {
  // Works
  console.log(numbers);
};
// consoleBeforeImport();

import {
  numbers,
  trees,
  persons,
  products,
  numbers21,
  smallNumbers,
} from "./utils.js";

const { log } = console;

const consoleVariable = () => {
  log(numbers);
  log(trees);
  log(persons);
  log(products);
};
// consoleVariable();

const beforeVariableDeclaration = () => {
  //RefferenceError
  log(x);
  let x = 20;
};
// beforeVariableDeclaration();

// array at

const logItemAtIndex = () => {
  let index = 2;
  log(numbers.at(index)); // 3
  log(trees.at(index)); // Jawor
  log(persons.at(index)); // {name: 'Emily', age: 19, alive: true}
  log(products.at(index)); // {item: 'Telefon', price: 699.99, stock: {…}}

  index = -2;
  log(numbers.at(index)); // 19
  log(trees.at(index)); // Wierzba
  log(persons.at(index)); // {name: 'Sophia', age: 74, alive: false}
  log(products.at(index)); //{item: 'Smartwatch', price: 249.99, stock: {…}}
};
// logItemAtIndex();

// Array concat

const concatArrays = () => {
  let array = numbers.concat(numbers21);
  log(array);

  let array2 = [...numbers, ...numbers21];
  log(array2);

  //   extraElement
  let extra = 0;
  let array3 = numbers.concat(numbers21, extra);
  log(array3);

  let array4 = [extra, ...numbers, ...numbers21];
  log(array4);
};

// concatArrays();

// Array fill
// fill(value, start, end)
// if nothing pass in fill() => undefined
// fill() also change "array"
// if start === end fill() doesn't change anything
// if array length is higher then amount of numbers in array, it doesn't create extra item - only takes the existing one
// if array is empty it doesn't work

const fillArray = () => {
  //   let array = [...smallNumbers];
  let array = Array(5);

  let arrayFilled = array.fill(1);

  log(arrayFilled);
  log(array);
  log(smallNumbers);
};
// fillArray();

// Array filter

// Doesn't change the "numbers"
// Creates new array
const filterArrays = () => {
  const numberResults = numbers.filter((number) => number >= 10);
  log(numberResults);

  numberResults.push(21);
  log(numberResults);
  log(numbers);
};
filterArrays();
