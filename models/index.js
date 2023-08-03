const Shout = require("./Shout");
const User = require("./User");

// Define a Driver as having one License to create a foreign key in the `license` table
User.hasMany(Shout, {
  foreignKey: "user_id",
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: "CASCADE"
});

// We can also define the association starting with License
Shout.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Shout };
