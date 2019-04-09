const express = require("express");
const mongoose = require('mongoose');
const request = require("request");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/hobbies", require("./routes/hobbies"));
const database = require("./database");

let Hobby = require('./models/hobbies');

mongoose.connect('mongodb://localhost:27017/hobbiesDB',{useNewUrlParser: true})
.then(()=> {
  console.log('Successfully Connected');

  return true;
})
.catch(err => console.error(err));

//GET
app.get('/hobbiesList', function(req, res){
  Hobby.find({}, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

//POST
app.post('/hobbiesList', function(req, res){
  var name = req.body.name;
  var hobby = req.body.hobby;

  var hobby = new Hobby({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    hobby: hobby
  });

  hobby.save(function (err) {
    if (err) throw err;
    console.log('Hobby successfully saved');
  });
  res.send(req.body);
})

app.listen(process.env.PORT, () => console.log("Server is listening on PORT ${process.env.PORT}"))
