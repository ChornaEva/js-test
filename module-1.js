// 1 - Vars

// console.log(a);
// const a = "перемінна a";
// console.log(a);

// let x = 5;
// x = 10;
// console.log(x);

// const x = 6;
// console.log(x-аргумент); - виклик метода

// const age = 16;
// const totalPrice = 200.76;
// const userName = "Eva";
// const isOpen = true;
// const shouldConfirm = false;

// console.log("вік:", age);
// console.log('ціна:', totalPrice);
// console.log('імʼя:', userName);
// console.log('статус роботи:', isOpen);
// console.log('чи потрібно продовжувати:', shouldConfirm);

// const type = typeof 'true';
// console.log(type);
// const type = typeof shouldConfirm;
// console.log(type);

// alert(age);
// alert(userName);
// _________________________________________________

// 2- Input

// const message = "Покохаймося?";
// const shouldRenew = confirm("Покохаймося?");
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// const quantity = prompt('напиши щось');
// console.log(quantity);
// console.log(typeof quantity);

// let quantity = prompt('напиши щось');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// _________________________________________________

// 3- Numders

// let elementWidth = "50px";
// elementWidth =  Number.parseInt(elementWidth);
// console.log(elementWidth);
// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(typeof result);

// ****
// let elementHeight = "200.75px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// ****
// const salary = 1300.16472;
// console.log(salary.toFixed());

// let salary = 1300.16472;
// console.log(salary.toFixed(2));

// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// salary = Number(salary.toFixed(2));
// console.log(salary);

// ****
// let quantity = "30";
// let value = "Цю строку неможливо привести к числу";

// console.log(Number("5"));
// console.log(Number(true));
// console.log(Number('hello'));

// ****

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);

// let base = prompt("давай число");
// base = Number(base); - преведення до числа
// console.log(base);
// console.log(typeof base);

// let power = prompt("давай ступінь");
// power = Number(power); - преведення до числа
// console.log(power);
// console.log(typeof power);

// const result = Math.pow(base, power);
// console.log(result);
// console.log(typeof result);

// ****
// Math.random() * (max - min) + min;- формула генерація рандомного числа
// const max = 40;
// const min = 10;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ****
// Math.random() * (max - min) + min;- формула генерація рандомного числа
// const colors = [
//   "blue",
//   "green",
//   "red",
//   "orange",
//   "teal",
//   "tomato",
//   "skyblue",
//   "pink",
// ];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// console.log(index);
// const color = colors[index];

// console.log(color);
// document.body.style.backgroundColor = color;

// _________________________________________________

// 4- Strings

// const message = "В єтой строке 26 символов.";
// console.log(message.length);

// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// const room = 716;
// const type = "VIP";
// const welcomeMessage = `Гість ${firstName} ${lastName} поселилась в ${type} номері ${room}.`;
// console.log(welcomeMessage);

// const quantity = 5;
// const orderMessage = `Ви замовляєте ${quantity} холодильників!`;
// console.log(orderMessage);

// #2
// const brand = "Samsung";
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// let brand = "samSUnG";
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// #3
// const blacklistedWord1 = "спам";
// const blacklistedWord2 = "розпродаж";

// const string1 = "привіт, це не спам, читай";
// const string2 = "Найбільший РОЗПРОДАЖ цього тижня!";
// const string3 = "Рекламна компанія.";

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// _________________________________________________

