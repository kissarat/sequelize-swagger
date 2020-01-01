const defineNumber = (maximum, minimun = -maximum) => ({
    type: 'number',
    minimun,
    maximum
});
const MaxInt32 = 2 ** 31 - 1;

module.exports = {
    Int32: defineNumber(MaxInt32),
    Integer: defineNumber(Number.MAX_SAFE_INTEGER),
    PositiveInt32: defineNumber(MaxInt32, 1),
    PositiveInteger: defineNumber(Number.MAX_SAFE_INTEGER, 1),
    Boolean: { type: 'boolean' }
}
