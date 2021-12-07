const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use('/cities', require('./routes/cities'));
app.use('/cities/all', require('./routes/cities'));
const db = require('./keys').mongoURI;


mongoose.connect(db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));