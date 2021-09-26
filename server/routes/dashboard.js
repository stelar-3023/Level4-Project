const router = require('express').Router();
const pool = (require('../db'));
const authorization = require('../middleware/authorization');

router.post('/', authorization, async (req, res) => {
    try {
        // req.user has the payload
        const user = await pool.query('SELECT user_name FROM users WHERE user_id = $1', [req.user]);
        console.log(req.user);
        res.json(user.rows[0]);

    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server error');
    }
});

module.exports = router;