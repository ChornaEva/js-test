// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Kherson"));
// console.log(greet);

// function registerGuest(name, callback) {
//   console.log(`Return our ${name}`);
// }
// registerGuest("Kherson", greet);
// ****
// function registerGuest(name, callback) {
//   console.log(`Return our ${name}`);
//   callback(name);
// }
// registerGuest("Zaporiahja", function greet(name) {
//   console.log(`Hello, ${name}!`);
// });

// registerGuest("Kherson", function notify(name) {
//   console.log(`Dear ${name}, you are home!`);
// });

// ****

// function processCall(recipient) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Client ${recipient} is non avaliable at the moment`);
//   } else {
//     console.log(`Connecting to ${recipient}, please wait`);
//   }
// }

// processCall("Vlad");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Connecting to ${name}, please hold a line`);
// }

// function activateAnsweringMachine(name) {
//   console.log(
//     `Client ${name} is non avaliable at the moment. Please leave a message.`
//   );
// }

// function leaveHoloMessage(name) {
//   console.log(
//     `Client ${name} is non avaliable at the moment. Leave a HoloMessage`
//   );
// }

// processCall("Vlad", takeCall, activateAnsweringMachine);
// processCall("Vlad", takeCall, leaveHoloMessage);

// ****
// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }
// repeatLog(10);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("PrettyPrint value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// repeat(3, printValue);
// repeat(6, prettyPrint);

// ****
// const numbers = [5, 10, 15, 20, 25];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ****
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// const greet = () => {
//   return `Hello!`;
// };

// const add = (a, b, c) => {
//   return a + b + c;
// };
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// const arrowAdd = (a, b, c) => a + b + c;

// ****
// const add = (...args) => {
//   console.log(args);
// };
// add(1, 2, 3, 4);

// ****
// const nambers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, number ${number}`);
// });

// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, number ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25,30];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, number ${number}`);
// };

// numbers.forEach(logMessage);

// ****
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
// console.log(filteredNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNumbers = numbers.filter((value) => value > 3);
// console.log(filteredNumbers);

// ****
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// dirtyMultiply(numbers, 5);
// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubleNumbers = pureMultiply(numbers, 6);

// console.log(numbers);
// console.log(doubleNumbers);

// ****
// array.method((item, index, array) => {});
// array.method((item) => {});
// array.map((element, index, array) => {});

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names);

// const scores = students.map((student) => student.score);
// console.log(scores);

// ****
// array.flatMap((element, index, array) => {});
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const courses = students.map((student) => student.courses);
// console.log(courses);

// const allStudentsCourses = students.flatMap((student) => student.courses);
// console.log(allStudentsCourses);

// ****
// array.filter((element, index, array) => {});

// 1) const values = [51, -3, 27, 21, -68, 42, -37];
// const positivValues = values.filter((value) => value > 0);
// console.log(positivValues);

// const negativeValue = values.filter((value) => value < 0);
// console.log(negativeValue);

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues);

// 2) const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
// const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);

// const uniceCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniceCourses);

// 3) const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average);

// ****
// array.find((element, index, array) => {});

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const blue = colorPickerOptions.find((option) => option.label === "blue");
// console.log(blue);
// const white = colorPickerOptions.find((option) => option.label === "white");
// console.log(white);

// ****
// array.findIndex((element, index, array) => {});

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const red = colorPickerOptions.findIndex((option) => option.label === "red");
// console.log(red);

// const pink = colorPickerOptions.findIndex((option) => option.label === "pink");
// console.log(pink);

// const grey = colorPickerOptions.findIndex((option) => option.label === "grey");
// console.log(grey);

// ****
// array.every((element, index, array) => {});
// const isTrue = [1, 2, 3, 4, 5, 6, 7, 8, 9].every((value) => value > 0);
// console.log(isTrue);
// const isFalse = [-1, -2, 4, 7, 9, -5].every((value) => value >= 0);
// console.log(isFalse);

// array.some((element, index, array) => {});
// const isTrue = [1, 2, 3, 4, 5, 6, 7, 8, 9].some((value) => value > 0);
// console.log(isTrue);
// const isFalse = [-1, -2, 4, 7, 9, -5].some((value) => value >= 0);
// console.log(isFalse);
// const isSecondFalse = [1, 2, 3, 4, 5, 6, 7, 8, 9].some((value) => value < 0);
// console.log(isSecondFalse);

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvaliable = fruits.every((fruit) => fruit.amount > 0);
// console.log(allAvaliable);

// const anyAvaliable = fruits.some((fruit) => fruit.amount > 0);
// console.log(anyAvaliable);

// ****
// array.reduce((previousValue, element, index, array) => {}, initialValue);

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);

// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };
// console.log(countLikes(tweets));

// 2

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// // console.log(tags);

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };

// const countTags = (tags) => tags.reduce(getTagStats, {});
// console.log(countTags(tags));

// const tagCount = countTags(tags);
// console.log(tagCount);

// ****
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students);

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores);
// console.log(ascendingScores);

// ****

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores);

// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReversOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversOrder);

// ****

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// const inReversAlphabetOrder = students.sort((firstStudent, secondStudent) =>
//   secondStudent.name.localeCompare(firstStudent.name)
// );
// console.log(inReversAlphabetOrder);

// ****

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);
// const names = sortedByAscendingScore.map((student) => student.name);
// console.log(names);

// const studentsName = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
// console.log(studentsName);

// const uniceSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(uniceSortedCourses);

// **** TASKS
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// 2.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// 3.
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// 4.
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// 5.
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach((element) => {
//     totalPrice += element;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 6.
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// 7.
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// 8.
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

// 9.
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(3, 400));

// 10.
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => (totalPrice += item));
//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// 11.
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }



// console.log(filterArray([1, 2, 3, 4, 5], 3));
