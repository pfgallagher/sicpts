export {};

const square = (x: number): number => x * x;

const improve = (x: number, guess: number): number =>
	(x / square(guess) + 2 * guess) / 3; // Thanks, Newton. Still don't understand this fully quite yet.

const abs = (x: number): number => (0 <= x ? x : -x);

const isGoodEnough = (guess: number, lastGuess: number | undefined): boolean =>
	lastGuess !== undefined ? abs(guess - lastGuess) < 0.001 : false;

const cubeRoot = (x: number, guess = 1, lastGuess?: number): number =>
	isGoodEnough(guess, lastGuess)
		? Math.round(guess * 1000) / 1000
		: cubeRoot(x, improve(x, guess), guess);
