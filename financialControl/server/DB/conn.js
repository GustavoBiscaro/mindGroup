const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('financialcontrol', 'root', 'mySqlPass2023@', {
  host: 'localhost',
  dialect: 'mysql'
});

// ... definição dos seus modelos (User, outros modelos)

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL!');

    // Sincronizar todos os modelos, forçando a recriação das tabelas
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to MySQL:', error);
  }
}

main().catch((err) => console.error(err));

module.exports = sequelize;