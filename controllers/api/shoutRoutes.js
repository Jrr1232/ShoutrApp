const router = require("express").Router();
const { Shout, User } = require("../../models");
const withAuth = require("../../utils/auth");

// route to create/add a shout using async/await
router.post("/", async (req, res) => {
  try {
    const shoutData = await Shout.create({
      user_id: req.body.user_id,
      text: req.body.text

    });

    res.status(200).json(shoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:user_id", withAuth, async (req, res) => {
  try {
    const shoutData = await Shout.findAll({
      include: [
        {
          model: User

        }
      ],
      where: {
        user_id: req.params.user_id
      }
    });
    const userData = await User.findAll({
      where: {
        id: req.params.user_id

      }
    });

    const shouter = shoutData.map((shout) =>
      shout.get({ plain: true }));
    const username = userData.map((user) =>
      user.get({ plain: true }));
    // console.log(shouter);

    res.render("./partials/shout-details", {
      shouter,
      username
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
