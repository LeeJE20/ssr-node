const dotenv = require("dotenv");
dotenv.config();

const poolOption = {
  max: 5,
  min: 0,
  // maximum time, in milliseconds, that pool will try to get connection before throwing error
  acquire: 30 * 1000,
  // maximum time, in milliseconds, that a connection can be idle before being released
  idle: 10 * 1000,
};

module.exports = {
  USER: process.env.DB_USER,
  HOST: process.env.DB_HOST,
  DB: process.env.DB_DB,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT,
  dialect: "mysql",
  pool: poolOption,
};
