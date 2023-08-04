const sequelize = require("../config/connection");
const seedShout = require("../shoutData");
// const { User } = require("../models");

// const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedShout.sync();
  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true
  // });

  process.exit(0);
};

seedDatabase();
