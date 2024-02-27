//removing fallback abiilty to sqlite
if (!process.env.MYSQL_HOST){
  throw new Error("Environment variable MYSQL_HOST must be set.");
}
else module.exports = require('./mysql');
