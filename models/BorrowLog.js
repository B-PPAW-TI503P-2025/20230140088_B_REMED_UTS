const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BorrowLog = sequelize.define('BorrowLog', {
  userId: {
    type: DataTypes.INTEGER
  },
  bookId: {
    type: DataTypes.INTEGER
  },
  borrowDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  latitude: {
    type: DataTypes.FLOAT
  },
  longitude: {
    type: DataTypes.FLOAT
  }
});

module.exports = BorrowLog;
