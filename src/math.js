export function add(a, b) {
  const unused = 42;
  return a + b;
}

export function average(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}
