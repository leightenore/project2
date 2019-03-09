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

  app.get("/api/users/:id", function(req, res) {
      console.log(req.body);
      db.User.findAll({
        attributes: 
          ["biome_choice", "price_choice"],
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });
}