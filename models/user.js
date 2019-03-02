module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userpassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination_match: {
            type: DataTypes.STRING,
            allowNull: false
            default:
        }
    });
    return User;
};