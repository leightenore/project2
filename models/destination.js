require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Destination = sequelize.define("Destination", {
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biome: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        price_point: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    });
    return Destination;
};