const types = require('./types');

module.exports = function describe(model, options = { modelRef: '#/components/schema' }) {
    const reference = association => ({ $ref: `${options.modelRef}/${association.target.name}` });
    const required = [];
    const properties = {};
    for(const [ name, attribute ] of Object.entries(model.tableAttributes)) {
        if (attribute.allowNull === false) {
            required.push(name);
        }
        const base = types[attribute.type.constructor.name];
        const definition = { ...base };
        if (attribute.noUpdate) {
            definition.readOnly = true;
        }
        const v = attribute.validate || {};
        switch(definition.type) {
            case 'number': {
                if (isFinite(v.max)) {
                    definition.maximum = v.max;
                }
                if (isFinite(v.min)) {
                    definition.minimum = v.min;
                }
            }
            break;
            case 'string':
                if (v.len && v.len.length === 2) {
                    definition.minLength = v.len[0];
                    definition.maxLength = v.len[1];
                }
                if (v.is) {
                    definition.pattern = v.is.toString()
                }
                if (v.isEmail) {
                    definition.format = 'email'
                }
            break;
        }
        properties[name] = definition;
    }
    for(const [ name, relation ] of Object.entries(model.associations)) {
        properties[name] = relation.associationType === 'HasMany'
            ? { type: 'array', readOnly: true, items: reference(relation) }
            : { ...reference(relation), readOnly: true }
    }
    return {
        type: 'object',
        required,
        properties
    };
}
