// 1.
//Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел (чисел в степени получаемой функции).
// const array = [1, 5, 6, 4, 2];
// const newArray = [];

// for (const value of array) {
//     newArray.push(value * value);
// }
// console.log(newArray);

// 2.
// Дан массив с числами. Найдите сумму этих чисел.

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

// Дан массив с числами. Оставьте в нем только четные числа.
// const arr = [1, 5, 6, 4, 2];

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// const arr = [-1, 0, -9, 1];
// const secondArr = [1, 5, 9];

// const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Змініть цей рядок
// console.log(myStr);
// I am a "double quoted" string inside "double quotes".

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// const myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine";
// console.log(myStr);

// FirstLine
//     \SecondLine
// ThirdLine

// Код	При виведенні буде
// \'	одинарні лапки
// \"	подвійні лапки
// \\	зворотня коса риска
// \n	новий рядок
// \t	tab
// \r	carriage return
// \b	границі слова
// \f	розрив сторінки

// switch (lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }

// function caseInSwitch(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }

//   return answer;
// }

// console.log(caseInSwitch(1));

// function switchOfStuff(val) {
//   let answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//   }
//   return answer;
// }

// console.log(switchOfStuff(1));

// function sequentialSizes(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   return answer;
// }
// console.log(sequentialSizes(4));

// function chainToSwitch(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком

//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//   }
//   return answer;
// }

// function abTest(a, b) {
//   if (a < 0 || b < 0) {
//     return undefined;
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(-2, 2));

// *****

// Ви писатимете функцію підрахунку карт.
// Вона матиме параметр card, який може бути числом або рядком, а також збільшить або зменшить загальну змінну count відповідно до значення карти (див. таблицю).
// Тоді функція поверне рядок з поточним рахунком і рядок Bet, якщо рахунок більше нуля, або Hold, якщо рахунок дорівнює або менше нуля. Між поточним рахунком та рішенням гравця (Bet чи Hold) повиннен бути один пробіл.

// let count = 0;

// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count -= 1;
//       break;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else if (count <= 0) {
//     return count + " Hold";
//   }
// }

// Приклад результатів: -3 Hold або 5 Bet

// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc("K"));
// console.log(cc("A"));

// ****
// Встановіть для змінної playerNumber значення 16.
// Потім використовуйте змінну, щоб знайти ім’я гравця та призначити його гравцеві.

// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };

//   // Змініть код лише під цим рядком
//   const playerNumber = 16;  // Змініть цей рядок
//   const player = testObj[playerNumber];   // Змініть цей рядок
//   console.log(player);

// ****

// Переробіть ключове твердження на об'єкт, що називається lookup. Використовуйте його, щоб шукати val і призначати пов'язаний рядок до result змінної.

// function phoneticLookup(val) {
//   let result = "";

//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };

//   result = lookup[val];
//   return result;
// }
// console.log(phoneticLookup("charlie"));

// ****
// Змініть функцію checkObj, щоб перевірити чи об'єкт переданий до функції (obj) містить особливу властивість (checkProp). Якщо властивість знайдена, поверніть значення властивості. Якщо ні, поверніть "Not Found".
// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
// }
// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

// ****
// Додайте новий альбом до масиву myMusic. Додайте artist та title рядки, release_year число та масив рядків formats.
// const myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true,
//   },
// ];

// myMusic.push({
//   artist: "Radiohead",
//   title: "Creap",
//   release_year: 1992,
//   formats: ["Alternative rock", "grunge", "post-grunge", "pop"],
// });
// console.log(myMusic);

// ****
// Отримайте доступ до myStorage та визначте вміст скрині glove box для змінної gloveBoxContents. Використовуйте точкову нотацію для всіх властивостей, де це можливо, в іншому випадку використовуйте дужки.

// const myStorage = {
//   car: {
//     inside: {
//       "glove box": "maps",
//       "passenger seat": "crumbs",
//     },
//     outside: {
//       trunk: "jack",
//     },
//   },
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// ****
// Використовуючи точкову і дужкову нотацію, встановіть змінну secondTree на другий елемент в списку trees з об'єкта myPlants.
// const myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];

//   const secondTree = myPlants[1].list[1];
//   console.log(secondTree);

// ****
// Ви починаєте з функції updateRecords, яка приймає літерал об'єкту records, який містить колекцію музичного альбому, id, prop (такі як artist чи tracks), і value. Завершіть функцію, використовуючи правила нижче, щоб змінити об'єкт, переданий до функції.

// Ваша функція повинна завжди повертати весь об'єкт збірки записів.
// Якщо prop це не tracks і value не є пустим рядком, то оновіть або встановіть prop альбому до value.
// Якщо prop є tracks але альбом немає властивості tracks, створіть пустий масив та додайте value до нього.
// Якщо prop є tracks та value не є пустим рядком, додайте value до кінця наявного масиву tracks у альбомі.
// Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
// Note: Копія об'єкту recordCollection використовується для тестування.

// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }
// updateRecords(recordCollection, 5439, "artist", "ABBA");

// ****
// Додайте числа від 5 до 0 (включно) у порядку спадання до myArray, використовуючи цикл while.

// const myArray = [];
// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i -= 1;
// }
// console.log(myArray);

// ****
// Використовуйте for цикл для того, щоб перемістити значення 1 через 5 на myArray.
// const myArray = [];

// for (let i = 1; i <= 5; i += 1) {
//   myArray.push(i);
// }

// console.log(myArray);

// Додайте непарні числа від 1 до 9 до myArray, використовуючи цикл for.

// const myArray = [];

// for (let i = 1; i <= 9; i += 2) {
//   myArray.push(i);
// }

// console.log(myArray);

// Додайте непарні числа від 9 до 1 до myArray, використовуючи цикл for.
// const myArray = [];

// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray);

// Оголосіть та ініціалізуйте змінну total до 0. Використовуйте цикл for для додавання значення кожного елементу масиву myArr до total.

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i <= myArr.length - 1; i += 1) {
//   total += myArr[i];
// }

// console.log(total);

// Вкладення для циклів
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// Змініть функцію multiplyAll для того, щоб повернути добуток усіх чисел у підмасивах arr.

// function multiplyAll(arr) {
//   let product = 1;

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// ****

// const ourArray = [];
// let i = 5;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// В коді змініть while цикл на do...while цикл і він висуватиме лише число 10 до myArray, а i буде дорівнювати 11, коли код закінчить роботу.

// const myArray = [];
// let i = 10;

// do {
//   myArray.push(i);
//   i += 1;
// } while (i <=10);

// console.log(myArray);

// ****
// Напишіть рекурсивну функцію, sum(arr, n), що повертає суму перших n елементів масиву arr.

// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

// ****
// Функція lookUpProfile яка приймає name та властивість (prop) як аргументи були попередньо записані для вас.
// Функція має перевірити, чи name є фактичним контактом firstName і даний параметр (prop) є властивістю цього контакту.
// Якщо обидва є правдою, то поверніть "значення" цієї власності.
// Якщо name не відповідає жодному контакту, поверніть рядок No such contact.
// Якщо prop не відповідає жодним дійсним властивостям контакту, знайденим за відповідністю name потім поверніться на рядок No such property.

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i += 1) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Akira", "address"));

// ****
// Створіть функцію під назвою randomRange, яка займає діапазон myMin і myMax і повертає випадкове ціле число, яке більше або дорівнює myMinі менше або дорівнює myMax, включно.

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
// }

// console.log(randomRange(1, 2));

// ****
// Використовуйте parseInt() у функції convertToInteger, щоб вона конвертувала вхідний рядок str у ціле число та повернула його.

// function convertToInteger(str) {
//   const value = parseInt(str);
//   return value;
// }

// convertToInteger("56");

// ****
// Використовуйте parseInt() у функції convertToInteger, щоб воно перетворило двійкове число на ціле число і повернуло його.

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// convertToInteger("10011");
// console.log(convertToInteger("10011"));

// ****
// Використовуйте умовний оператор у функції checkEqual, щоб перевірити чи два числа рівні, чи ні. Функція має повернути рядок Equal або рядок Not Equal.

// function checkEqual(a, b) {
//   return a === b ? "Equal" : "Not Equal";
// }
// checkEqual(1, 2);
// console.log(checkEqual(1, 2));

// ****
// function findGreaterOrEqual(a, b) {
//   return a === b
//     ? "a and b are equal"
//     : a > b
//     ? "a is greater"
//     : "b is greater";
// }

// У функції checkSign, використовуйте декілька умовних операторів, дотримуючись рекомендованого формату, що використаний у findGreaterOrEqual - для того, щоб перевірити чи число додатнє, від'ємне або нуль. Функція має повернути positive, negative or zero.

// function checkSign(num) {
//   return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
// }

// checkSign(10);
// console.log(checkSign(10));

// ****
// РЕКУРСІЯ
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// Ми вже визначили функцію під назвою countdown з одним параметром (n). Функція має використовувати рекурсію, щоб повернути масив, який містить цілі числа від n до 1 на основі параметра n. Якщо функція викликається числом меншим за 1, вона має повернути порожній масив. Наприклад, виклик цієї функції зі значенням n = 5 має повернути масив [5, 4, 3, 2, 1]. Ваша функція має використовувати рекурсію шляхом виклику самої себе, але не повинна використовувати ніякі цикли.

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }

// function countdown(n) {
//   return n < 1 ? [] : [n, ...countdown(n - 1)];
// }
// console.log(countdown(-1));
// console.log(countdown(10));
// console.log(countdown(5));

// ****
// Ми визначили функцію під назвою rangeOfNumbers з двома параметрами. Функція повинна повернути масив цілих чисел, що починаються з числа, представленого параметром startNum і закінчується числом, яке представлене параметром endNum. Початкове число завжди буде меншим або рівним кінцевому номеру. Ваша функція має використовувати рекурсію, викликаючи сама себе, але не повинна використовувати якісь цикли. Вона також повинна працювати у випадках, колиstartNum і endNum однакові.

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const array = rangeOfNumbers(startNum, endNum - 1);
//     array.push(endNum);
//     return array;
//   }
// }

// function rangeOfNumbers(startNum, endNum) {
//   return endNum < startNum
//     ? []
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum];
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));
