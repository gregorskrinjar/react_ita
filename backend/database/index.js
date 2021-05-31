const Sequalize  = require('sequelize');

// Connection
const sequelize = new Sequalize('nodedb', 'root', '',
    {
        host: "localhost",
        dialect: "mysql",
        
    }
);
console.log(sequelize.DB_NAME);
// Sinhronizacija vseh modelov v projektu
sequelize.sync();

(async () => {
    try {
        await sequalize.authenticate();
        console.log("Connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database.", error)
    }
});

module.exports = sequelize;