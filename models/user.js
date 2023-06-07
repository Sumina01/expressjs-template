const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db-config.js");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false, // true by default
    primaryKey: true, // false by default
    autoIncrement: true, // false by default
    unique: true,
    field: "id",
  },
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

User.sync().then(() => console.log("Connected successfully")).catch;

module.exports = User;
