const types = require('../../src/sequelize/types');
const { equal } = require('assert');

describe('sequelize types', () => {
    it('object', () => {
        Object.keys(types)
            .forEach(type => {
                equal(typeof types[type].type, 'string');
            })
    })
});
