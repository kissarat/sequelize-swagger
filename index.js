const types = require('./src/types');
const sequelizeTypes = require('./src/types');
const describeModel = require('./src/sequelize/describe');

const types = {
    ...types,
    ...sequelizeTypes
}

module.exports = {
    types,
    describeModel
}
