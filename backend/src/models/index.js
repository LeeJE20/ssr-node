const dbConfig = require("./../config/dbConfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  //   operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const forceOption = process.env.NODE_ENV === "development";

db.sequelize
  .sync({ force: forceOption })
  .then(() => {
    console.log(`=================================`);
    console.log(`[${process.env.NODE_ENV}] sync db`);
    console.log(`=================================`);
  })
  .catch((err) => {
    console.error(err);
  });
module.exports = db;
