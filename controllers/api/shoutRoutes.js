const router = require("express").Router();
const Shout = require("../../models/Shout");
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

// route to return shout based on user_id
router.get("/:user_id", async (req, res) => {
    try {
        const shoutData = await Shout.findAll({
            where: {
                user_id: req.params.user_id

            }

        });
        const shouter = shoutData.map((shout) => shout.get({ plain: true }));
        const shout = shouter[0].text;
        const username = shouter[0].user_id;

        console.log(shout);
        console.log(username);

        res.render("./partials/shout-details", {
            shout,
            username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
