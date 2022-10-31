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
