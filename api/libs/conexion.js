const{ Sequelize } = require('sequelize');
const {config} = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbCluster}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dataBase}`;

const sequelize = new Sequelize(URI, {
    dialect: `${config.dbCluster}`,
    loggin: true,
});

sequelize.sync();

module.exports= sequelize;