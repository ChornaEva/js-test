// TASK 1
// const clients = ['Eva', 'Vlad', 'Uve','Tony'];
// console.log(clients[0]);
// console.log(clients[1]);
// clients[0] = 'Tina';
// clients[3] = 'Susan';
// console.log(clients);
// console.log(clients.length);
// const lastElementIndex = clients.length-1;
// console.log('lastElementIndex: ', lastElementIndex);
// const lastElementName = clients[clients.length-1];
// console.log('lastElementName: ', lastElementName);
// ______________________________________________
// TASK 2
// const clients = ["Eva", "Vlad", "Uve", "Tony"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log("client: ", client);
// }

// const string = "javascript";
// for (const letter of string) {
//   console.log("letter: ", letter);
// }
// ______________________________________________
// TASK 3
// const clients = ["Eva", "Vlad", "Uve", "Tony"];
// const clientsNameToFind = "Vlad";
// let message;

// for (const client of clients) {
//   if (client === clientsNameToFind) {
//     message = `Клієнт з імʼям ${clientsNameToFind} є в базі!`;
//     break;
//   }
//   message = `Клієнт з імʼям ${clientsNameToFind} відсутній в базі!`;
// }

// console.log('message: ', message);

// Виводимо числа більші за поріг (threshold)
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// let message;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   message = `Число ${numbers[i]} більше за число ${threshold}`;
//   break; - без брейк перебор відбувається до кінця
// }
// console.log("message: ", message);
// ______________________________________________
// TASK 4
// в простих типах ми не маємо доступ до зміни оригіналу, створюється копія
// let a = 5;
// let b = a;
// console.log('a: ', a);
// console.log('b: ', b);
// a = 10;
// console.log('a: ', a);
// console.log('b: ', b);

// b=15;
// console.log('a: ', a);
// console.log('b: ', b);
// *** в складних типах ми маємо доступ до оригіналу
// const a = ["Mango"];
// const b = a;
// console.log('a: ', a);
// console.log('b: ', b);

// a.push("Poly");
// console.log('a: ', a);
// console.log('b: ', b);

// b.push("Ajax");
// console.log('a: ', a);
// console.log('b: ', b);
// ______________________________________________
// TASK 5
// const name = "Vlad";
// console.log("name: ", name.split(""));
// const message = 'Javascript - its interesting!';
// console.log('message: ', message.split(' '));

// const message = ['Javascript', 'its', 'interesting'];
// console.log('message: ', message.join(' '));
// **
// const clients = ["Eva", "Vlad", "Uve", "Tony"];
// console.log(clients.indexOf("Vlad"));
// console.log(clients.indexOf("Evan"));

// const clients = ["Eva", "Vlad", "Uve", "Tony"];
// console.log(clients.includes('Siri'));
// console.log(clients.includes('Uve'));
// **
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// let message;

// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   message = `${fruit} is a red fruit`;
// }
// console.log(message);
// **
// const numbers = [];
// numbers.push(1);
// console.log(numbers);
// numbers.push(3);
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// **
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// console.log(redFruits.slice(0,2));
// console.log(redFruits.slice(1));
// console.log(redFruits.slice(-2));
// **
// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0,2);
// console.log('scores: ', scores);
// console.log('deletedScores: ', deletedScores);

// const fruits = ["apple", "strawberry", "cherry", "cranberries"];
// console.log("fruits: ", fruits);
// fruits.splice(0, 0, "bananas", "orange");
// console.log("fruits: ", fruits);

// const fruits = ["apple", "strawberry", "cherry", "cranberries"];
// fruits.splice(1, 1, "bananas");
// console.log(fruits);
// fruits.splice(0, 2, "tomato");
// console.log(fruits);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsOldPlusNew = oldClients.concat(newClients);
// console.log(allClientsOldPlusNew);

// const allClientsNewPlusOld = newClients.concat(oldClients);
// console.log(allClientsNewPlusOld);

// **
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count();

// ** ASKIG VLAD!!!

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }
// console.log(multiply(5,10,15));

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }

//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }

//   console.log("Операція зняття коштів проведена успішно");
//   return;
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// const multiply = function (x, y, z) {
//   console.log(`result ${x * y * z}`);
// };
// multiply(1, 2, 3); - only after function;

// multiply(1, 2, 3); - before function;
// function multiply(x, y, z) {
//   console.log(`result ${x * y * z}`);
// }
// **ЗАПИТАТИ У ВЛАДА
// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }

//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");

// "Лог до виклику fnA"
// "Лог всередині функції fnA до виклику fnB"
// "Лог всередині функції fnB"
// "Лог всередині функції fnA після виклику fnB"
// "Лог після виклику fnA"

//   function bar() {
//     console.log("bar");
//   }

//   function baz() {
//     console.log("baz");
//   }

//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }

//   foo();

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// ****
// function getExtremeElements(array) {
//   const newArray = [];

//   const firstElement = array.splice(0, 1);
//   // console.log(firstElement);
//   const lastElement = array.splice(array.length - 1, 1);
//   // console.log(lastElement);
//   newArray.push(...firstElement, ...lastElement);
//   return newArray;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ***
// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice;

//   const splitMessage = message.split(" ");
//   console.log(splitMessage);
//   const quontityWords = splitMessage.length;
//   console.log(quontityWords);
//   totalPrice = quontityWords * pricePerWord;
//   console.log(totalPrice);
//   return totalPrice;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// ***

// function slugify(title) {
//   let newTitle;
//   const normalisedTitle = title.toLowerCase();
//   console.log(normalisedTitle);
//   const splitMessage = normalisedTitle.split(" ");
//   console.log(splitMessage);
//   const joinMessage = splitMessage.join('-');
//   console.log(joinMessage);
// }
// slugify("Arrays for begginers");

// ****
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0,2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// *****
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   console.log('newArray: ', newArray);

//   if (newArray.length > maxLength) {
//     const sliceArray = newArray.slice(0, maxLength);
//     console.log('sliceArray: ', sliceArray);
//     return sliceArray;
//   } else {
//     return newArray;
//   }
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// ****
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     // console.log(i);
//     sum = sum + i;
//     console.log(sum);
//   }
//   return sum;
// }
// calculateTotal(24);

// ****
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);

// for (let i = 0; i<fruits.length; i+=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// };

// ****
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // console.log('order: ', order);

//   for (let i = 0; i < order.length; i += 1) {
//     // console.log(order.length);
//     total = total + order[i];
//     console.log(total);
//   }
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// *******
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   let longestWord = "";
//   const splitString = string.split(" ");
//   // console.log(splitString);

//   for (let i = 0; i < splitString.length; i += 1) {
//     // console.log(splitString[i]);
//     if (splitString[i].length > longestWord.length) {
//       longestWord = splitString[i];
//     }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// ******
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
//   console.log(numbers);
// }
// createArrayOfNumbers(29, 34);

// *****
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
// function filterArray(numbers, value) {
//   const newArray = [];

//   console.log(numbers);
//   console.log(numbers.length);

//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// filterArray([12, 24, 8, 41, 76], 38);

// ******
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   const includesFruit = fruits.includes(fruit);
//   console.log(includesFruit);
//   return includesFruit;
// }

// checkFruit("plum");
// checkFruit("mandarin");

// ****
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   console.log(newArray);
//   // return newArray;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// *****
// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const stuff of order) {
//       total += stuff;
//     }
//     return total;
//   }

//   calculateTotalPrice([12, 85, 37, 4]);

// *****
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     for (const number of numbers) {

//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }

//     return filteredNumbers;
//   }
//   filterArray([12, 24, 8, 41, 76], 20);

// *****
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// findNumber(16, 35, 7);

// ****
// function includes(array, value) {
//   let coincidence = true;
//   for (const stuff of array) {
//     coincidence = stuff === value ? true : false;
//     console.log(coincidence);
//   }
//   return coincidence;
// }

// function includes(array, value) {
//   for (const stuff of array) {
//     if (stuff === value) {
//       return true;
//     }
//   }
//   return false;
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
