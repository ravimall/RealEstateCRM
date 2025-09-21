const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Payment extends Model {}

Payment.init({
  amount: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  bookingId: { type: DataTypes.INTEGER, allowNull: false },
  allocated: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
  unallocated: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
}, { sequelize, modelName: 'payment' });

module.exports = Payment;