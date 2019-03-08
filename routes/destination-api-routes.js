const path = require('path');
const db = require("../models");
const sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/destinations", function(req, res) {
    db.Destination.findAll({
      include: [{
        model: db.User,
        where: { biome_choice: db.User.biome_choice,
        price_choice: db.User.price_choice }
      }]
    }).then(function(data) {
      console.log(data[0]);
  });
  // app.get("/api/destinations/", function (req, res) {
  //   let max = 0;
  //   db.User.findAll({
  //     attributes: [sequelize.fn('max', sequelize.col('id'))],
  //     raw: true,
  //   }).then(function (data) {
  //     max = data[0]['max(`id`)'];


  //     db.Destination.findAll({
  //       where: {
  //         id: max
  //       }
  //     })
  //   }).then(function (max) {
  //     console.log(max);
  //     db.Destination.findAll({
  //       attributes: ["destination"],
  //       where: {
  //         id: max
  //       }
  //     }).then(function (dbDest) {
  //       res.json(dbDest);
  //     });
  //   });
  // });


// need to edit where statment to return matched location with the max id values not the one that matches the value itself



//need to find the destination name where the price point and biome match the users selections
//if statement?

// need to edit where statment to return matched location with the max id values not the one that matches the value itself

});
}