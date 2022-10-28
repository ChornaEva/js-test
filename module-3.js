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
