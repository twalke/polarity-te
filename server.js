const express = require("express");
require("dotenv").config();

const app = express();
const database = require("./database");

app.use(express.json());

//GET
app.get("/", (req, res) => {
  const foundHobbies = database.find();
  res.status(200).send(foundHobbies);
})

//POST
app.post("/", (req, res) => {
  //access request body
  const newHobby = req.body;
  //save to Database
  const saveHobby = database.save(newHobby);
  //send back confirmation
  res.send(201).send(saveHobby);
})

app.listen(process.env.PORT, () => console.log("Server is listening on PORT ${process.env.PORT}"))
