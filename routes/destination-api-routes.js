const path = require('path');
const db = require("../models");
const sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/destinations/", function (req, res) {
    let max = 0;
    db.User.findAll({
      attributes: [sequelize.fn('max', sequelize.col('id'))],
      raw: true,
    }).then(function (data) {
      return max = data[0]['max(`id`)'];
    }).then(function (max) {
      db.Destination.findAll({
        attributes: ["destination"],
        where: {
          id: max
        }
      }).then(function (dbDest) {
        res.json(dbDest);
        console.log(dbDest);
      });
    });
  });
}

//need to find the destination name where the price point and biome match the users selections
//if statement?