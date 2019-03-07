
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