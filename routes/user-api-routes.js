const path = require('path');
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //extract user object into a global variable so you can use it in the .get?

  //   app.post("/api/results", function(req, res) {
  //   for (let i = 0; i < resultsArray.length; i++) {
  //     let results = resultsArray[i];
  //   }
  // });

  app.get("/api/userresults", function(req, res) {
      db.User.findOne({
        // where: something,
        // include: [db.destinations]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  }

  // app.get(/whatever) {
  //   userObject.biome =res[0].biome
  // }.then (function() {
  //   app.get() {

  //   }
  // })