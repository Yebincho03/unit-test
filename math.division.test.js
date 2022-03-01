//The operation should return the division of two numbers

const { division } = require("./division");

test("4 / 2 = 2", () => {
  expect(division(4, 2)).toBe(2);
});

test.skip("9 / 3 = 3", () => {
  expect(division(9, 3)).toBe(3);
});

test.each([
  [8, 2, 4],
  [-10, 5, -2],
  [100, 10, 10],
])("a / b = c", (a, b, expected) => {
  expect(division(a, b)).toBe(expected);
});
