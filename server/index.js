const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');

// process.env.PORT
// process.env.NODE_ENV => production or development




// middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
app.use(express.json()); // req.body

if(process.env.NODE_ENV === 'production') {
  // serve static files
  app.use(express.static('client/build'));
}

// registration
app.use('/', require('./routes/registration'));

// login and verify
app.use('/', require('./routes/login'));

// exercise
app.use('/', require('./routes/exercise'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
