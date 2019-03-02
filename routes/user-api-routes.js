const path = require('path');
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/users", function(req, res) {
    db.User.create({
      username: username,
      biome_choice: $(".biome").val(),
      // price_choice:,
      // destination_match:
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/userresults", function(req, res) {
      db.User.findOne({
        // where: something,
        // include: [db.destinations]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  }

  // GET route for getting all of the posts
//   app.get("/api/survey", function(req, res) {
//     var query = {};
//     if (req.query.) {
//       query.AuthorId = req.query.author_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findAll({
//       where: query,
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   }
