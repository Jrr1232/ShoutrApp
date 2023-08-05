const sequelize = require("../config/connection");
const { User, Shout } = require("../models");

const seedShout = require("./shoutData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  await Shout.bulkCreate(seedShout);

  process.exit(0);
};

seedDatabase();
