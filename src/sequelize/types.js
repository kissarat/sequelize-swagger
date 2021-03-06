const primitives = require('../types');

const types = {
    BIGINT: primitives.Integer,
    BOOLEAN: primitives.Boolean,
    DATE: { type: 'string', format: 'date' },
    DECIMAL: { type: 'number' },
    DOUBLE: { type: 'number' },
    ENUM: { type: 'string', enum: [] },
    FLOAT: { type: 'number' },
    INTEGER: primitives.Int32,
    JSON: { type: 'object', required: [], properties: {} },
    REAL: { type: 'number' },
    STRING: primitives.String,
    TEXT: { type: 'string' },
    UUID: { type: 'string', pattern: "[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}"}
}

module.exports = types;
