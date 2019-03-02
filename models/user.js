module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // userpassword: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        biome_choice: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        price_choice: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // destination_match: {
        //     type: DataTypes.STRING,
        //     defaultValue: "Darvasa Gas Crater, Derweze, Turkmenistan"
        // }
    });
    return User;
};