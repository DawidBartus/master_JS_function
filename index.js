// Obliczanie średniej arytmetycznej: Napisz funkcję, która przyjmuje tablicę liczb jako argument i
// zwraca średnią arytmetyczną tych liczb. Średnia arytmetyczna jest obliczana przez dodanie wszystkich liczb w tablicy i podzielenie przez ich liczbę.

import { numbers21 } from "./utils.js";

const numbers = (arr) => {
  const arrSum = numbers21.reduce((total, number) => total + number, 0);

  const arrLength = arr.length;

  return arrSum / arrLength;
};

console.log(numbers(numbers21));

// Odwracanie tekstu: Napisz funkcję, która odwraca podany ciąg znaków. Na przykład, dla ciągu "Hello, World!"
// funkcja powinna zwrócić "!dlroW ,olleH". Możesz wykorzystać pętlę lub metody na obiekcie string do odwrócenia tekstu.

const strings = (string) => {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(strings("Hello, World!"));
