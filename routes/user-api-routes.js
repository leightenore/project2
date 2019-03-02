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
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.destinations]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });
}