const path = require('path');
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  let userObject = {};

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
      userObject.biome = res[0].biome
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.destinations]
      }).then(function(dbUser) {
        // app.get( , function(req,res) {

        // }
        res.json(dbUser);
      });
  });
}