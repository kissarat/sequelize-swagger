const primitives = require('../types');

const types = {
    BIGINT: primitives.Integer,
    BOOLEAN: primitives.Boolean,
    DATE: { type: 'string', format: 'date' },
    DECIMAL: 'number',
    DOUBLE: 'number',
    ENUM: { type: 'string', enum: [] },
    FLOAT: 'number',
    INTEGER: primitives.Int32,
    JSON: { type: 'object', required: [], properties: {} },
    REAL: 'number',
    STRING: 'string',
    TEXT: 'string',
    UUID: { type: 'string', pattern: "[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}"}
}

module.exports = types;
