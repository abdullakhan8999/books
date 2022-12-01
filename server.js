// npm run dev
const express = require("express");
const serverConfig = require("./config/server.config");
const bodyparser = require("body-parser");
const App = express();
App.use(bodyparser.urlencoded({ extended: true }));
App.use(bodyparser.json());
const db = require("./model/index");

db.admin.hasMany(db.users);
db.users.hasMany(db.admin);

db.connection.sync({ force: true }).then(() => {
  console.log("tables dropped and recreated");
  insertBooks();
  insertUsers();
  insertAdmin();
});
const insertUsers = async () => {
  const users = [
    {
      user_name: "Abdulla Khan",
      email: "abdulla@khan",
      password: "abdul@khan",
    },
    {
      user_name: "Patan Abdulla Khan",
      email: "abdulla@Patan_khan",
      password: "abdul@Patan_khan",
    },
    {
      user_name: "Azeez",
      email: "AZEEZ@1234",
      password: "azeez@321",
    },
  ];
  await db.users
    .bulkCreate(users)
    .then(() => {
      console.log("Users table is initialized");
    })
    .catch((err) => {
      console.log(`Error ${err} while initializing users table`);
    });
};
const insertBooks = async () => {
  const books = [
    {
      title: "A Better India: A Better World publication",
      author: "Narayana Murthy",
      publication: 2009,
      price: 763,
    },
    {
      title: "A Passage to India",
      author: "E.M. Foster",
      publication: 1924,
      price: 123,
    },
    {
      title: "A Revenue Stamp",
      author: "Amrita Pritam",
      publication: 1977,
      price: 189,
    },
  ];
  await db.books
  .bulkCreate(books)
  .then(() => {
    console.log("Books table is initialized");
  })
  .catch((err) => {
      console.log(`Error ${err} while initializing Books table`);
    });
};
const insertAdmin = async () => {
  const admin = [
    {
      admin_name: "Abdulla Khan",
      email: "abdulla@khan",
      password: "abdul@khan",
      userId: 1,
    },
  ];
  await db.admin
    .bulkCreate(admin)
    .then(() => {
      console.log("Admin table is initialized");
    })
    .catch((err) => {
      console.log(`Error ${err} while initializing admin table`);
    });
};

require("./router/index")(App);
require("./router/users.router")(App);
require("./router/books.router")(App);
require("./router/adminRouter")(App);

App.listen(serverConfig.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${serverConfig.PORT}`
  );
});
