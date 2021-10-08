const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodecourse", "root", "dreamAboutCheese404", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
