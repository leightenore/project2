const path = require('path');
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/destinations/:id", function(req, res) {
      console.log(req.body);
      db.Destination.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(dbDest) {
        res.json(dbDest);
      });
  });
}

//need to find the destination name where the price point and biome match the users selections
//if statement?