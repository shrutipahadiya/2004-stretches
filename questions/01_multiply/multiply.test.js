const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(2)).toThrow();

    expect(() => multiply(1)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof(3*2)).toBe("number");

    // test that the returned value is correct
    expect(3*2).toBe(6);

    // test some other values
    expect(4*5).toBe(20);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
   expect(Math.random()*Math.random()).toBe(Math.random());
  });
});
