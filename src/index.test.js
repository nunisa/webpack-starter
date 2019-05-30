const addArray = arr => {
    return arr.length ? arr.reduce((sum, num) => sum + num) : 0;
};

test('sum of values in [1, 2, 3] = 6', () => {
    expect(addArray([1, 2, 3])).toBe(6);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});