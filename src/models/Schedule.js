const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Schedule extends Model {}

Schedule.init({
  bookingId: { type: DataTypes.INTEGER, allowNull: false },
  dueDate: { type: DataTypes.DATE, allowNull: false },
  principalDue: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  principalPaid: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
  interestDue: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  interestPaid: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
  taxDue: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  taxPaid: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
}, { sequelize, modelName: 'schedule' });

module.exports = Schedule;