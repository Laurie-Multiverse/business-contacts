const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('business_contacts', 'postgres', 'abc123', {
    host: 'db',
    dialect: 'postgres',
});

const Contact = sequelize.define("contacts", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  department: DataTypes.STRING,
  position: DataTypes.STRING,
});

module.exports = {
  sequelize,
  Contact,
};
