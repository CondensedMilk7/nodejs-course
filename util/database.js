const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodecourse", "root", "cheese", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
