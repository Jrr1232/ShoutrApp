const router = require("express").Router();
const { Shout, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all shouts for homepage
router.get("/", async (req, res) => {
  try {
    const shoutData = await Shout.findAll({
      include: [
        {
          model: User
        }
      ]
    });

    const userData = await User.findAll();

    const username = userData.map((user) =>
      user.get({ plain: true }));
    const shouter = shoutData.map((shout) =>
      shout.get({ plain: true }));

    res.render("homepage", {
      shouter,
      username,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const shoutData = await Shout.findAll();
    const shouter = shoutData.map((shout) =>
      shout.get({ plain: true }));

    res.render("homepage", { shouter });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("create-new-shout");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
