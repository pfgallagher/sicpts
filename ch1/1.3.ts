export {};

const square = (x: number): number => x * x;

const sumSquares = (x: number, y: number): number => square(x) + square(y);

const sumSquaresOf2Largest = (x: number, y: number, z: number): number =>
	x < y && x < z
		? sumSquares(y, z)
		: y < x && y < z
		? sumSquares(x, z)
		: sumSquares(x, y);
