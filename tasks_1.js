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
