const router = require('express').Router();
const Shout = require('../../models/Shout')
const withAuth = require('../../utils/auth');

// route to create/add a shout using async/await
router.post('/', async (req, res) => {
    try {
        const shoutData = await Shout.create({
            user_id: req.body.user_id,
            text: req.body.text,

        });

        res.status(200).json(shoutData)
    } catch (err) {
        res.status(400).json(err);
    }
});


// route to return shout based on user_id
router.get('/:user_id', withAuth, async (req, res) => {
    try {
        const shoutData = await Shout.findAll({
            where: {
                user_id: req.params.user_id

            }
        });

        const shout = shoutData.map((shout) => shout.get({ plain: true }));

        res.render('homepage', {
            shout,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;
