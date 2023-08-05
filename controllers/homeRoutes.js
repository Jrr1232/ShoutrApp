const router = require("express").Router();
const { Shout, User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/home", async (req, res) => {
  try {
    const shoutData = await Shout.findAll({
      include: [
        {
          model: User

        }
      ]
    });
    const userData = await User.findAll();
    const username = userData.map((user) => user.get({ plain: true }));

    const shouter = shoutData.map((shout) => shout.get({ plain: true }));

    console.log(shouter);
    res.render("homepage", {
      logged_in: req.session.logged_in
      // shout:
      shouter,
      username
    });
  } catch (err) {
    console.log(err);
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

router.get("/new", withAuth, (req, res) => {
  res.render("create-new-shout");
});

module.exports = router;
