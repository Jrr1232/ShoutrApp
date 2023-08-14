const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = ""
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    "    mysql://zkoez0gg0mjy62lu:oe7uisz9dssjs2lp@rwo5jst0d7dgy0ri.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wz30cwd3unpznq9g")
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
  )
};

module.exports = sequelize;
