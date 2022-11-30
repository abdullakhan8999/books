// npm run dev
const express = require("express");
const App = express();
const bodyparser = require("body-parser");
const router = require("./router/index");
const serverConfig = require("./config/server.config");
const db = require("./model/index");
const dbConfig = require("./config/db.config");
const Books = require("./model/Books.model");
const Admin = require("./model/Admin.model");
const Users = require("./model/User.model");
App.use(bodyparser.json());
App.use(router);

const init = async () => {
  await db.connection.sync({ force: true });
  insertBooks();
  insertUsers();
  insertAdmin();
};

const insertBooks = async () => {
  await db.books.bulkCreate([
    {
      tile: "A Better India: A Better World publication",
      author: "Narayana Murthy",
      publication: "21 April 2009",
      price: 763,
    },
    {
      tile: "A Passage to India",
      author: "E.M. Foster",
      publication: "4 June 1924",
      price: 123,
    },
    {
      tile: "A Revenue Stamp",
      author: "Amrita Pritam",
      publication: "1977",
      price: 189,
    },
  ]);
};

const insertUsers = async () => {
  await db.users.bulkCreate([
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
  ]);
};
const insertAdmin = async () => {
  await db.admin.bulkCreate([
    {
      admin_name: "Abdulla Khan",
      email: "abdulla@khan",
      password: "abdul@khan",
    },
  ]);
};

App.listen(serverConfig.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${serverConfig.PORT}`
  );
  init();
});
