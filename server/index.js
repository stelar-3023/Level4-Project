const express = require('express');
const app = express();

const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: false }));

// registration
app.use('/', require('./routes/registration'));

// login and verify
app.use('/', require('./routes/login'));

// exercise
app.use('/', require('./routes/exercise'));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
