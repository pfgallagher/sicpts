export {};

const average = (x: number, y: number): number => (x + y) / 2;

const improve = (guess: number, x: number): number => average(guess, x / guess); // Intuitively, this mostly makes sense, but I'm not sure how to formally describe it.

const square = (x: number): number => x * x;

const isGoodEnough = (guess: number, x: number): boolean =>
	abs(square(guess) - x) < 0.001; // Square our guess to see if it's close to our target, thus being (close to) the target's square root. Diff is used as an error margin.

const abs = (x: number): number => (0 <= x ? x : -x);

const sqrtIter = (guess: number, x: number): number =>
	isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);

const sqrt = (x: number): number => sqrtIter(1, x);

// We can use a default parameter to combine `sqrtIter` and `sqrt`, too:
const simplerSqrt = (x: number, guess = 1): number =>
	isGoodEnough(guess, x) ? guess : simplerSqrt(x, improve(guess, x));

/*
    Although the Calculus portion is kind of handwavy for me, the general process makes sense. Make some random guess and check if it's close enough. If not, improve the guess and try again, recursively, until we're close enough.
*/
