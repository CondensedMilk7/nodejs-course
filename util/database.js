const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-course",
  password: "dreamAboutCheese404"
});

module.exports = pool.promise();
