const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('financialcontrol', 'root', 'mySqlPass2023@', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.sync({ alter: true })
    .then(() => console.log('Database synchronized'))
    .catch(error => console.error('Error syncing database:', error));

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL!');

        // Sync all defined models to the database
        await sequelize.sync();
        // console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to MySQL:', error);
    }
}

main().catch((err) => console.error(err));

module.exports = sequelize;