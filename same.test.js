const same = require('./same')

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
})

test('true if every value in the array has value squared in second array', () => {
  expect(same([1,2,3], [4,1,9])).toBe(true)
})

test('arrays of different lengths', () => {
  expect(same([1,2,3], [1,9])).toBe(false)
})

test('if different frequency of occurences', () => {
  expect(same([1,2,1], [4,4,1])).toBe(false)
})