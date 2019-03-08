const Sequelize = require('sequelize');
const User = require("./user.js");

module.exports = function (sequelize, DataTypes) {
    const Destination = sequelize.define("Destination", {
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biome_choice: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        price_choice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_one: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        image_two: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        image_three: {
            type: DataTypes.STRING, 
            allowNull: true
         }
    },{
        timestamps: false
    });

    return Destination;
};