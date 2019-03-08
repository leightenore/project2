const path = require('path');
const db = require("../models");
const sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/destinations", function (req, res) {
    db.User.findAll({
      limit: 1,
      order: [['id', 'DESC']]
    }).then(function (entries) {

      db.Destination.findAll({
        where: {
          biome_choice: entries[0].biome_choice,
          price_choice: entries[0].price_choice
        }
      }).then(function (result) {
        res.json(result);
        console.log(result[0]);
      });
    })
  })
};

