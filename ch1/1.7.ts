export {};

const average = (x: number, y: number): number => (x + y) / 2;

const improve = (guess: number, x: number): number => average(guess, x / guess);

const square = (x: number): number => x * x;

const isGoodEnough = (guess: number, x: number): boolean =>
	abs(square(guess) - x) < 0.001;

const abs = (x: number): number => (0 <= x ? x : -x);

const sqrt = (x: number, guess = 1): number =>
	isGoodEnough(guess, x) ? guess : sqrt(x, improve(guess, x));

// console.log(sqrt(Number.MAX_SAFE_INTEGER)); // => stack overflow
// console.log(sqrt(0.0001)); //  => 0.03230844833048122

const newIsGoodEnough = (
	guess: number,
	lastGuess: number | undefined,
): boolean =>
	lastGuess !== undefined ? abs(guess - lastGuess) < 0.001 : false;

const newSqrt = (x: number, guess = 1, lastGuess?: number): number =>
	newIsGoodEnough(guess, lastGuess)
		? Math.round(guess * 1000) / 1000
		: newSqrt(x, improve(guess, x), guess);

console.log(newSqrt(Number.MAX_SAFE_INTEGER)); // => 94906265.624
console.log(newSqrt(0.0001)); // => 0.01
