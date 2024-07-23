const { DataTypes } = require('sequelize');
const sequelize = require('../DB/conn');

const User = sequelize.define('User', {
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});


module.exports = User;