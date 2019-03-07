const path = require('path');
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/destinations/:id", function(req, res) {
      db.Destination.findAll({
        attributes: ["destination"],
        where: {
          id: req.params.id
        }
      }).then(function(dbDest) {
        res.json(dbDest);
      });
  });
}