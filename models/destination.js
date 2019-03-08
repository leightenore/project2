const Sequelize = require('sequelize');

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
    
    Destination.belongsTo(User, {foreignKey: "biome_choice"})
    return Destination;
};