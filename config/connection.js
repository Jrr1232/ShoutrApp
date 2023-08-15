const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = "";
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    " mysql://o1z5vx9whktc37c0:iran3dtzuykendx7@i0rgccmrx3at3wv3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/edp9jmtoq4c5moa1");
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306
    }
  );
}

module.exports = sequelize;
