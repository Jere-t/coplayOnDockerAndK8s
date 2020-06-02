// db/DB_CONFIG.js

// ======================================
// = Settings for database's connection =
// ======================================
// "3306" "coplay" "33mWU7GsbbXLnKFg" "coplayDB"

const DB_CONFIG = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, 
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  multipleStatements: true,
  debug: true
};

module.exports = DB_CONFIG;
