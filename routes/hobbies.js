const express = require("express");
const hobbyRouter = express.Router();
const Hobby = require("../models/hobbies");

hobbyRouter.route("/")
  .get((req, res, next) => {
    //ask database for entire collection of hobbies
    Hobby.find()
      .then(hobbyCollection => res.status(200).send(hobbyCollection))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })
  .post((req, res, next) => {
    //get the fields from req.body
    const hobbyData = req.body;
    //turn into a DOCUMENT
    const hobbyDoc = new Hobby(hobbyData);
    //save to the database
    hobbyDoc.save()
      .then(savedHobbyDoc => res.status(201).send(savedHobbyDoc))
      .catch(err => {
        res.status(500);
        next(err);
      })
  })

module.exports = hobbyRouter;
