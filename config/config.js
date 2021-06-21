require("dotenv").config();

module.exports = {
  development: {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: "mysql",
  }

};
