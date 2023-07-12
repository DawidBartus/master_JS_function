const consoleBeforeImport = () => {
  // Works why?
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
  emptyArray,
  evenNumbers,
  person,
  orders,
  file,
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

  const files = file.filter((file) => {
    let index = file.indexOf(".");
    return file.slice(index, file.length) === ".txt";
  });
  log(files);

  // Better option!

  const files2 = file.filter((file) => file.endsWith(".txt"));
  log("files2", files2);
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

// Copy an object

const letsCopyAnObject = () => {
  const newPerson = person;
  log("newPerson before change:", newPerson);
  log("newPerson before change:", person);

  log("--- ---");

  person.age = 33;
  person.address.state = "Zwierzyniecka";

  log("person age is change to 33:");
  log("person address is change to Zwierzyniecka:");

  log("newPerson age:", newPerson.age);
  log("person age:", person.age);
  log("newPerson address:", newPerson.address.state);
  log("person address:", person.address.state);

  log("---");

  newPerson.age = 35;
  newPerson.address.state = "Kapelanka";

  log("newPerson age is change to 35:");
  log("newPerson address is change to Kapelanka:");

  log("newPerson age:", newPerson.age);
  log("person age:", person.age);
  log("newPerson address:", newPerson.address.state);
  log("person address:", person.address.state);

  // If newPerson i change the person object is also change bc its only an reference
  // to person object, not a copy

  log("---Spread operator---");
  // Spread operator

  const newPersonSpread = { ...person };

  person.age = 33;
  person.address.state = "Grunwaldzka";
  log("person age is change to 33:");
  log("person address is change to Grunwaldzka:");

  log("newPersonSpread age:", newPersonSpread.age);
  log("person age:", person.age);
  log("newPersonSpread address:", newPersonSpread.address.state);
  log("person address:", person.address.state);

  log("---");

  newPersonSpread.age = 40;
  newPersonSpread.address.street = "Królewska";
  log("newPersonSpread age is change:");
  log("newPersonSpread address is change:");

  log("newPersonSpread age:", newPersonSpread.age);
  log("person age:", person.age);
  log("newPersonSpread address:", newPersonSpread.address.street);
  log("person age:", person.address.street);

  // Spread operator create only shallow copy of person object.
  // If first layer is change in newPersonSpread it doesn't change the person object
  // But if something deeper in newPersonObject is change, it also refers to person object

  log("--- Structured clone ---");
  // Structured clone

  const structuredPerson = structuredClone(person);

  person.age = 22;
  person.address.state = "Barska";
  log("person age is change to 33:");
  log("person address is change to Barska:");

  log("structuredPerson age:", structuredPerson.age);
  log("person age:", person.age);
  log("structuredPerson address:", structuredPerson.address.state);
  log("person address:", person.address.state);

  log("---");

  structuredPerson.age = 60;
  structuredPerson.address.street = "Zduńska";
  log("structuredPerson age is change  to 60:");
  log("structuredPerson address is change to Zduńska:");

  log("structuredPerson age:", structuredPerson.age);
  log("person age:", person.age);
  log("structuredPerson address:", structuredPerson.address.street);
  log("person age:", person.address.street);

  // structuredClone() creates the deep copy of object

  log("--- JSON.stringify() & JSON.parse()");

  const newPersonJSONStringify = JSON.stringify(person);
  const newPersonJSON = JSON.parse(newPersonJSONStringify);

  person.age = 24;
  person.address.state = "Krowoderska";
  log("person age is change to 24:");
  log("person address is change to Krowoderska:");

  log("newPersonJSON age:", newPersonJSON.age);
  log("person age:", person.age);
  log("newPersonJSON address:", newPersonJSON.address.state);
  log("person address:", person.address.state);

  log("---");

  newPersonJSON.age = 99;
  newPersonJSON.address.street = "Zduńska";
  log("newPersonJSON age is change  to 99:");
  log("newPersonJSON address is change to Zduńska:");

  log("newPersonJSON age:", newPersonJSON.age);
  log("person age:", person.age);
  log("newPersonJSON address:", newPersonJSON.address.street);
  log("person age:", person.address.street);
};
// letsCopyAnObject();

const mapFunction = () => {
  log("Map function");
  const numbers = [...smallNumbers];
  log("numbers", numbers);

  numbers.map((number) => number * 2);
  log("numbers after map", numbers);

  const mapNumbers = numbers.map((number) => number * 2);
  log("mapNumbers", mapNumbers);

  const personArray = [...persons];
  const alivePersons = personArray.map((person) =>
    person.alive ? `${person.name} - alive` : `${person.name} - dead`
  );
  log(alivePersons);

  const onlineOrdersWithTotalPrice = orders.map((order) => {
    let { price, quantity, available } = order;

    let totalPrice = available ? (price * quantity).toFixed(2) : 0;

    return { ...order, totalPrice };
  });
  log(onlineOrdersWithTotalPrice);

  const availableAndSortedItems = (array) => {
    const availableItems = array.filter((item) => item.available === true);
    const names = availableItems.map(({ name }) => name);
    return names.sort();
  };
  log(availableAndSortedItems(orders));

  const moreThenOneItemInOrder = (array) => {
    const orderArray = array.filter((item) => item.quantity > 1);

    const addSubtotal = orderArray.map((item) => {
      const { price, quantity } = item;
      let subtotal = (price * quantity).toFixed(2);

      return { ...item, subtotal };
    });
    return addSubtotal;
  };
  log(moreThenOneItemInOrder(orders));
};
// mapFunction();
