const Sequelize = require("sequelize");
const dbConfig = require("./db-config");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("connected successfully"))
  .catch((error) => console.log(`Connection failed ${error}`));

module.exports = sequelize;
