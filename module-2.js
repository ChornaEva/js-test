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
function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
}

checkStorage(100, 50);