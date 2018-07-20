const Sequelize = require('sequelize');
const sequelize = require('./index');

// 数据库表跟对象的映射

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
  username: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER },
  address: { type: Sequelize.STRING },
  isdelete: { type: Sequelize.INTEGER }
})

module.exports = User;