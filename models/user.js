const Sequelize = require('sequelize');
const Destination = require("./destination.js");

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
        // ,
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // }
    },{
        timestamps: false
    });

    User.associate = function(models) {
        User.belongsTo(models.Destination, {
            foreignKey: "price_choice",
            foreignKey: "biome_choice"
        });
    };
    return User;
};