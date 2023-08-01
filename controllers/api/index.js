const router = require("express").Router();

const userRoutes = require("./userRoutes");
const shoutRoutes = require("./shoutRoutes");

router.use("/shout", shoutRoutes)
router.use("/users", userRoutes);

module.exports = router;
