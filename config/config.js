const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `../.env`),
  override: true,
});

const config = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPW,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
  }
}

module.exports = config;