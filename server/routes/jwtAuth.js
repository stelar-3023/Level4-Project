const router = require('express').Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")

// registering
router.post("/register", async (req, res) => {
    try {

        // 1. destructure the req.body (name, email, password)

        const {name, email, password} = req.body;

        // 2. check if user exists (if user exists then throw error)

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists")
        }

        // res.json(user.rows)

        // 3. Bcrypt the user password

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt)


        // 4. enter the user into the database

        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword])

        // res.json(newUser)

        // 5. generating our jwt token
        const token = jwtGenerator(newUser.rows[0].user_Id)

        res.json(token)


    } catch (err) {
        console.log(err.message)
        res.status(500).send("Server Error")
    }
})

// login route
router.post("/login", async (req, res) => {
    try {
        // 1. destructure the req.body

        const {email, password} = req.body

        // 2. check if use exists (if not then throw error)

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect.")
        }

        // 3. check if incoming password is the same as the database password

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        console.log(validPassword)

        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect.")
        }

        // 4. give them the jwt token

        const token = jwtGenerator(user.rows[0].user_Id)
        res.json({token})

    } catch (err) {

    }
})

module.exports = router;