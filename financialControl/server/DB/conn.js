const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('financialcontrol', 'root', 'mySqlPass2023@', {
    host: 'localhost',
    dialect: 'mysql'
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Conectou ao MySQL!');
    } catch (error) {
        console.error('Não foi possível conectar ao MySQL:', error);
    }
}

main().catch((err) => console.error(err));

module.exports = sequelize;