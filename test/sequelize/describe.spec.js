const describeModel = require('../../src/sequelize/describe');
const { User, sequelize } = require('../../examples/shop/models');
const { equal, throws } = require('assert');

describe('describeModel', async (done) => {
    it('object', async () => {
        try {
            await sequelize.sync();
            const schema = describeModel(User);
            equal(schema.type, 'object');
        } catch(err) {
            console.error(err);
            throws(err);
        }
    });
});

