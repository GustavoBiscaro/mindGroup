const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('financialcontrol', 'root', 'mySqlPass2023@', {
  host: 'localhost',
  dialect: 'mysql'
});



async function syncModels() {
  try {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('An error occurred while synchronizing the models:', error);
  }
}

syncModels();

module.exports = sequelize;