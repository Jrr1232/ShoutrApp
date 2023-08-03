const router = require("express").Router();
const { User } = require("../models");
const { Shout } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]]
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/home", async (req, res) => {
  try {
    const shoutData = await Shout.findAll();
    const shouter = shoutData.map((shout) => shout.get({ plain: true }));
    console.log(shouter);

    res.render("homepage", { shouter });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
