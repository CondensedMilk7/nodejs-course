const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-course", "root", "dreamAboutCheese404", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
