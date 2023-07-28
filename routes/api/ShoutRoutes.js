const router = require("express").Router();
const Shout = require("../../models/Shout");

// Post new shout (POST)
router.post("/api/shout", async (req, res) => {
  Shout.create({
    user_id: req.body.name,
    text: req.body.message

  }).then((newShout) => {
    res.json(newShout);
  })
    .catch((err) => {
      res.json(err);
    });
});

// Render homepage/ (GET) shout

router.get("/:user_id", async (req, res) => {
  const shoutData = await Shout.findOne({
    where: {
      user_id: req.params.user_id
    }

  });

  res.render("homepage", {

    shoutData,
    logged_in: req.session.logged_in
  });
});
