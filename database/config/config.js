require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "todo_list",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
