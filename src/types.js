const defineNumber = (format, maximum, minimum = -maximum) => ({
    type: 'number',
    format,
    minimum,
    maximum
});
const MaxInt32 = 2 ** 31 - 1;

module.exports = {
    Int32: defineNumber('int32', MaxInt32),
    Integer: defineNumber('int64', Number.MAX_SAFE_INTEGER),
    PositiveInt32: defineNumber('int32', MaxInt32, 1),
    PositiveInteger: defineNumber('int64', Number.MAX_SAFE_INTEGER, 1),
    Boolean: { type: 'boolean' }
}
