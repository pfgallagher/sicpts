10; // => 10
5 + 3 + 4; // => 12
9 - 1; // => 8
6 / 2; // => 3
2 * 4 + (4 - 6); // => 6

// These are explicitly typed as numbers to prevent TypeScript from proactively checking our math:
const a: number = 3; // => undefined
const b: number = a + 1; // => undefined

a + b + a * b; // => 19
a === b; // => false
b > a && b < a * b ? b : a; // => 4
a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25; // => 16
2 + (b > a ? b : a); // => 6
(a > b ? a : a < b ? b : -1) * (a + 1); // => 16
