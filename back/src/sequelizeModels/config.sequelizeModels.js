const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dialect: process.env.SEQ_DIALECT,
  pool: {
    max: Number(process.env.SEQ_POOL_MAX),
    min: Number(process.env.SEQ_POOL_MIN),
    acquire: Number(process.env.SEQ_POOL_ACQUIRE),
    idle: Number(process.env.SEQ_POOL_IDLE),
  },
});

module.exports = sequelize;
