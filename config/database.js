const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'root',
  'pafnadcasl',
  {
    host: 'localhost',
    port: 3308,
    dialect: 'mysql'
  }
);

module.exports = sequelize;
