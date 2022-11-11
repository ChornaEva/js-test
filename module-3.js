// const book = {
//   title: "Dead of russia",
//   author: "Chorna Yevheniia",
//   genres: ["prose", "documental"],
//   isPublic: true,
//   rating: 100,
// };

// const bookTitle = book.title;
// console.log(bookTitle);
// const bookauthor = book.author;
// console.log(bookauthor);
// const bookPrice = book.price;
// console.log(bookPrice);
// const bookgenres = book["genres"];
// console.log(bookgenres);
// const propKey = "rating";
// const bookRating = book[propKey];
// console.log(bookRating);

// book.rating = 2000;
// book.isPublic = false;
// book.genres.push("true storry");
// console.log(book.rating);
// console.log(book.isPublic);
// console.log(book.genres);

// book.pageCount = 20;
// book.originalLanguage = "ua";
// book.translations = ["en", "pl"];

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);
// console.log(book);

// *****

// const user = {
//   name: "Vlad",
//   tag: "Cjornii",
//   location: {
//     country: "Ukraine",
//     city: "Dnipro",
//   },
//   stats: {
//     followers: 1,
//     views: 200,
//     likes: 135,
//   },
//   hobbies: ["reading", "gaming", "dance"],
// };

// const userLocation = user.location;
// console.log(userLocation);
// const userCountry = user.location.country;
// console.log(userCountry);
// const userHobbies = user.hobbies;
// console.log(userHobbies);
// const userFirsHobbies = user.hobbies[0];
// console.log(userFirsHobbies);
// const quantityOfHobbies = user.hobbies.length;
// console.log(quantityOfHobbies);

// *******

// const name = "Putin Huy";
// const age = 70;

// const pidor = {
//   name: name,
//   age: age,
// };

// const pidor = {
//   name,
//   age,
// };

// console.log(pidor);
// console.log(pidor.name);
// console.log(pidor.age);

// *****

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name);

// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name);

// ******

// const bookShelf = {
//   books: ["putin huylo", "putin pidor"],

//   getbooks() {
//     console.log("цей метод повертатиме всі книги-властивість букс");
//   },

//   addbook(bookName) {
//     console.log("цей метод додаватиме книгу у властивість букс");
//   },
// };
// bookShelf.getbooks();
// bookShelf.addbook("puyin sdoh");

// const bookShelf = {
//   books: ["putin huylo", "putin pidor"],

//   getbooks() {
//     console.log(this);
//   },
// };
// bookShelf.getbooks();

// *****

// const bookShelf = {
//   books: ["putin huylo", "putin pidor"],

//   getbooks() {
//     return this.books;
//   },

//   addbook(bookName) {
//     this.books.push(bookName);
//   },

//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// console.log(bookShelf.getbooks());

// bookShelf.addbook("putin givno");
// bookShelf.addbook("putin pedofil");
// console.log("NEWBOOKS: ", bookShelf.getbooks());
// console.log(bookShelf.books.length);

// bookShelf.removeBook("putin givno");
// console.log("NEWBOOKS: ", bookShelf.getbooks());

// const fruitbox = {
//   fruits: ["orange", "apple", "bananas"],

//   getFruits() {
//     return this.fruits;
//   },

//   addFruits(fruitName) {
//     return this.fruits.push(fruitName);
//   },

//   removeFruits(fruitName) {
//     const fruitIndex = this.fruits.indexOf(fruitName);
//     return this.fruits.splice(fruitIndex, 1);
//   },
// };

// console.log(fruitbox.getFruits());

// fruitbox.addFruits('cherry');
// console.log(fruitbox.getFruits());

// fruitbox.removeFruits('bananas');
// console.log(fruitbox.getFruits());
// books: ["putin huylo", "putin pidor",'putin pedofil']

// *****

// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   rating: 10,
// };

// for(const key in book ){
// console.log(key);
// console.log(book[key]);
// }

// const user = {
//   sex: "male",
//   name: "Vlad",
//   age: 32,
//   isHandsome: true,
//   getMarried: true,
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// *****

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Platon";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   rating: 10,
// };

// for (const key in book) {
//   if (book.hasOwnProperty(key)) {
// console.log(key);
//     console.log(book[key]);
//   }
// }

// *****

// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   rating: 10,
// };

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

// const user = {
//   sex: "male",
//   name: "Vlad",
//   age: 32,
//   isHandsome: true,
//   getMarried: true,
// };

// const userKeys = Object.keys(user);
// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(key);
//   console.log(key, ":", user[key]);
// }

// *****

// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   rating: 10,
// };
// const values = Object.values(book);
// console.log(values);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total);

// ****

// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   rating: 10,
// };
// const entries = Object.entries(book);
// console.log(entries);

// ****

// const books = [
//   {
//     title: "putin huylo",
//     author: "ukrainians",
//     rating: 10,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book);
// }

// const bookTitles = [];
// for (const book of books) {
//   bookTitles.push(book.title);
// }
// console.log(bookTitles);

// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// console.log(totalRating);

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);

// ****
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(temps));
// console.log(...temps);
// console.log(Math.max(...temps));

// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps);

// ****
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second };
// console.log(third);

// const fourth = { ...second, ...first };
// console.log(fourth);

// ****
// function multiply(...args) {
//   console.log(args);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(otherArgs);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// *****
// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   isPublic: true,
//   rating: 10,
// };

// const accesType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accesType} доступі`;

// console.log(message);

// деструктуризуємо
// const { title, author, genres, isPublic, rating } = book;

// const accesType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accesType} доступі`;

// console.log(message);

// *****
// const book = {
//   title: "putin huylo",
//   author: "ukrainians",
//   genres: ["autobiography", "psychiatry"],
//   isPublic: true,
//   rating: 10,
// };

// const {
//   title,
//   author,
//   genres,
//   isPublic,
//   rating,
//   coverImg = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title);
// console.log(author);
// console.log(coverImg);

// ****
// const firstBook = {
//   title: "putin huylo",
//   coverImg: "https://via.placeholder.com/640/480",
// };
// const {
//   title: firstTitle,
//   coverImg:
//     firstCoverImg = "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// } = firstBook;

// console.log(firstTitle);
// console.log(firstCoverImg);

// const secondBook = {
//   title: "putin pedofile",
// };
// const {
//   title: secondTitle,
//   coverImg: secondCoverImg = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle);
// console.log(secondCoverImg);

// ****
// const books = [
//   { title: "putin huylo", author: "ukrainians", rating: 10 },
//   { title: "putin pedofile", author: "ukrainians", rating: 10 },
// ];

// for (const book of books) {
//   console.log(book.author);
//   console.log(book.title);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { author, title, rating } = book;
//   console.log(title);
//   console.log(rating);
//   console.log(author);
// }

// for (const { author, title, rating } of books) {
//   console.log(title);
//   console.log(rating);
//   console.log(author);
// }

// ****
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews);
// console.log(userLikes);

// ****
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`R:${red}, G:${green}, B:${blue}`);

// const rgb = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`R:${red}, G:${green}, B:${blue}, Alfa:${alfa}`);

// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red);
// console.log(colors);

// ****
// function doStuffWithBook(title, numberOfPages, downLoads, rating, public) {
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downLoads);
//   console.log(rating);
//   console.log(public);
// }

// doStuffWithBook("putin-pedofile", 600, 145000, 10, true);

// function doStuffWithBook(book) {
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   console.log(book.downloads);
//   console.log(book.rating);
//   console.log(book.isPublic);
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
// }

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(isPublic);
// }
// ****
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// ****
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// countProps({ name: "Mango", age: 2 });

// ****
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salaryValues = Object.values(salaries);

//   for (const salaryValue of salaryValues) {
//     totalSalary += salaryValue;
//   }
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// ***
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
// //   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ****
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let productPrice = 0;
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       productPrice = product.price;
//       return productPrice;
//     }
//   }
//   return null;
// }
// getProductPrice("Radar");

// ****
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

// getAllPropValues("quantity");

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }
//   return 0;
// }

// calculateTotalPrice("Blaster");
// console.log(calculateTotalPrice("Blaster"));
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");

// ****
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ****
// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
// //   const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ****
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// //   const highYesterday = highTemperatures.yesterday;
// //   const highToday = highTemperatures.today;
// //   const highTomorrow = highTemperatures.tomorrow;
// //   const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ****
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ****
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ****
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// ****
// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// console.log(bestScore);
// const worstScore = Math.min(...scores);
// console.log(worstScore);

// ****
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ****
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);

// ****
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.
// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.

// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
// Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   const object = { completed, category, priority, ...data };
//   return object;
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// ****
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
// }

// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// ****
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);

// ****
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(array, ...args) {
//   //   console.log(array);
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     // console.log(arg);
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// ****
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// ****
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");

// ****
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },

//   addPotions(potionName) {
//     this.potions.push(potionName);
//   },
// };

// ****
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     let removedPotionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(removedPotionIndex, 1);
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.removePotion("Dragon breath"));

// ****
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     let oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);
//   },
// };

// ****
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//     name: "Dragon breath",
//     price: 700,
//   }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// УМОВА:
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },

//     addPotion(newPotion) {
//       for (const potion of this.potions) {
//         if (newPotion.name === potion.name) {
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//       }
//       this.potions.push(newPotion);
//       return this.potions;
//     },

//     removePotion(potionName) {
//       for (const potion of this.potions) {
//         if (potionName === potion.name) {
//           const potionIndex = this.potions.indexOf(potion);
//           this.potions.splice(potionIndex, 1);
//           return this.potions;
//         }
//       }
//       return `Error! Potion ${potionName} is already in your inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//         if (oldName === potion.name) {
//           potion.name = newName;
//           return this.potions;
//         }
//       }
//     },
//   };

// РІШЕННЯ:

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potionName === potion.name) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
//       }
//     }
//     return `Error! Potion ${potionName} is already in your inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name = newName;
//         // const potionIndex = this.potions.indexOf(potion);????
//         // this.potions.splice(potionIndex, 1, newName);???
//         return this.potions;
//       }
//     }
//   },
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
