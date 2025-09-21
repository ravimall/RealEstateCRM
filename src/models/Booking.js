const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Booking extends Model {}

Booking.init({
  customerId: { type: DataTypes.INTEGER, allowNull: false },
  propertyId: { type: DataTypes.INTEGER, allowNull: false },
  // Add other fields as needed
}, { sequelize, modelName: 'booking' });

module.exports = Booking;
