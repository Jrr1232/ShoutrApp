const router = require("express").Router();

const userRoutes = require("./userRoutes");
const shoutRoutes = require("./shoutRoutes");

router.use("/shouts", shoutRoutes);
router.use("/users", userRoutes);

module.exports = router;
