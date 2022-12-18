// to run sever file npm run dev

const express = require("express");
const serverConfig = require("./config/server.config");
const bodyparser = require("body-parser");
const App = express();
App.use(bodyparser.urlencoded({ extended: true }));
App.use(bodyparser.json());
const db = require("./model/index");


const init = () => {
  db.connection.sync({ force: true }).then(() => {
    console.log("tables dropped and recreated");
    insert_todo();
    insertAdmin();
    insertRole();
  });
};

const insert_todo = async () => {
  const todo_list = [
    {
      title: "A Better India: A Better World publication",
      description: "this is description",
    },
    {
      title: "A Passage to India",
      description: "this is description",
    },
    {
      title: "A Revenue Stamp",
      description: "this is description",
    },
  ];
  await db.todo
    .bulkCreate(todo_list)
    .then(() => {
      console.log("Todo table is initialized");
    })
    .catch((err) => {
      console.log(`Error ${err} while initializing Todo table`);
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

const insertRole = async () => {
  await db.role
    .bulkCreate([
      { id: 1, name: "user" },
      { id: 2, name: "admin" },
    ])
    .then((Roles) => {
      console.log("Role table is initialized");
    })
    .catch((err) => {
      console.log(`Error ${err} while initializing role table`);
    });
};


require("./router/index")(App);
require("./router/auth.router")(App);
require("./router/users.router")(App);
require("./router/todo.router")(App);
require("./router/adminRouter")(App);


App.listen(serverConfig.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${serverConfig.PORT}/`
  );
  init();
});
