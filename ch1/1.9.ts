export {};

const inc = (x: number): number => x + 1;

const dec = (x: number): number => x - 1;

const plus = (a: number, b: number): number => (!a ? b : inc(plus(dec(a), b))); // recursive process

// plus(4, 5) => plus(3, 5) + 1 => plus(2, 5) + 2 => plus(1, 5) + 3 => plus(0, 5) + 4 => 5 + 4 => 9

const plusIter = (a: number, b: number): number =>
	!a ? b : plusIter(dec(a), inc(b)); // iterative process

// plusIter(4, 5) => plusIter(3, 6) => plusIter(2,7) => plusIter(1, 8) => plusIter(0, 9) => 9
