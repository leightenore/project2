require('dotenv').config();
const Sequelize = require('sequelize');


module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
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
        }
    },{
        timestamps: false
    });
    return User;
};