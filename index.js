// Obliczanie średniej arytmetycznej: Napisz funkcję, która przyjmuje tablicę liczb jako argument i
// zwraca średnią arytmetyczną tych liczb. Średnia arytmetyczna jest obliczana przez dodanie wszystkich liczb w tablicy i podzielenie przez ich liczbę.

import { numbers21 } from "./utils.js";

const numbers = (arr) => {
  const arrSum = numbers21.reduce((total, number) => total + number, 0);

  const arrLength = arr.length;

  return arrSum / arrLength;
};

// console.log(numbers(numbers21));

// Odwracanie tekstu: Napisz funkcję, która odwraca podany ciąg znaków. Na przykład, dla ciągu "Hello, World!"
// funkcja powinna zwrócić "!dlroW ,olleH". Możesz wykorzystać pętlę lub metody na obiekcie string do odwrócenia tekstu.

const strings = (string) => {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

// console.log(strings("Hello, World!"));

const localTime = new Date();
const UTCTime = new Date(
  localTime.getTime() + localTime.getTimezoneOffset() * 60000
);

// console.log(localTime);
// console.log(UTCTime);

function moveZeroes(nums) {
  let isZero = [];

  let numberArr = nums.filter((num) => {
    if (num === 0) {
      isZero.push(num);
    }
    return num !== 0;
  });

  if (isZero.length === 0) {
    console.log("No 0 in your array");
    return nums;
  }
  const newArr = [...numberArr, ...isZero];

  return newArr;
}

// console.log(moveZeroes([1, 4, 0, 5]));

let reverseString = (stringF) => stringF.split("").reverse().join("");

console.log(reverseString("czesc1"));
