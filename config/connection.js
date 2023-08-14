const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = ""
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    " mysql://dclmn62ol4j95g2m:s0v8gevgdz4g9p6q@rwo5jst0d7dgy0ri.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vw37u7v3v7liwmz1");
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
