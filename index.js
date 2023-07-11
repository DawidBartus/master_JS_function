const consoleBeforeImport = () => {
  // Works why?
  console.log(numbers);
};
consoleBeforeImport();

import {
  numbers,
  trees,
  persons,
  products,
  numbers21,
  smallNumbers,
  emptyArray,
  evenNumbers,
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
  log("numberResults:", numberResults);
  log("numbers:", numbers);

  const objectWithText = persons.filter(({ name }) => name === "David");
  log("numbers:", objectWithText);

  const persondoesntExist = persons.filter(({ name }) => name === "Abba");
  log("persondoesntExist:", persondoesntExist); // empty array

  const personAgeAndAlive = persons.filter(
    ({ age, alive }) => age >= 70 && alive === false
  );
  log("personAgeAndAlive:", personAgeAndAlive);

  const priceHigherThen = products.filter(
    ({ price, stock }) => price >= 500 && stock.available === true
  );
  log("priceHigherThen:", priceHigherThen);

  const availableItems = products.filter(
    (item) => item.stock.available === true
  );
  log("availableItems:", availableItems);

  const productsItemName = products.filter(({ item }) => item.length <= 6);
  log("productsItemName:", productsItemName);

  products.filter(({ item }) => item.length <= 6);
  log("products", products);
};
filterArrays();

// array find

const findItems = () => {
  const findDaniel = persons.find((person) => person.name === "Daniel");
  log("findDaniel", findDaniel);

  const findDeadDavid = persons.find(
    ({ name, alive }) => name === "David" && alive === false
  );
  log("findDeadDavid:", findDeadDavid);

  const findFirstDeadPerson = persons.find(({ alive }) => alive === false);
  log("findFirstDeadPerson:", findFirstDeadPerson);
};
// findItems();

// array every

const isEveryTrue = () => {
  const dividedTwo = (element) => element % 2 === 0;

  const numberDividedTwo = numbers.every((number) => number % 2 === 0);
  log("numberDividedTwo", numberDividedTwo);

  const numberDividedTwoFunction = numbers.every(dividedTwo);
  log("numberDividedTwoFunction", numberDividedTwoFunction);

  const evenNumbersFunction = evenNumbers.every(dividedTwo);
  log("evenNumbersFunction", evenNumbersFunction);

  const personsAge = persons.every(({ age }) => age >= 38);
  log("personsAge", personsAge);

  const availableProduct = products.every(
    ({ stock }) => stock.available === true
  );
  log("availableProduct", availableProduct);
};

// isEveryTrue();

// array some

const isSomeTrue = () => {
  const dividedTwo = (element) => element % 2 === 0;

  const someNumberDividedTwo = numbers.some((number) => number % 2 === 0);
  log("someNumberDividedTwo", someNumberDividedTwo);

  const someNumberDividedTwoFunction = numbers.some(dividedTwo);
  log("someNumberDividedTwoFunction", someNumberDividedTwoFunction);

  const someEvenNumbersFunction = evenNumbers.some(dividedTwo);
  log("someEvenNumbersFunction", someEvenNumbersFunction);

  const somePersonsAge = persons.some(({ age }) => age >= 38);
  log("somePersonsAge", somePersonsAge);

  const someAvailableProduct = products.some(
    ({ stock }) => stock.available === true
  );
  log("someAvailableProduct", someAvailableProduct);
};
// isSomeTrue();
