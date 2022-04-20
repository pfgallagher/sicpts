export {};

const average = (x: number, y: number): number => (x + y) / 2;

const improve = (guess: number, x: number): number => average(guess, x / guess);

const square = (x: number): number => x * x;

const isGoodEnough = (guess: number, x: number): boolean =>
	abs(square(guess) - x) < 0.001;

const abs = (x: number): number => (0 <= x ? x : -x);

const conditional = (
	predicate: boolean,
	thenClause: number,
	elseClause: number,
): number => (predicate ? thenClause : elseClause);

const sqrtIter = (guess: number, x: number): number =>
	conditional(isGoodEnough(guess, x), guess, sqrtIter(improve(guess, x), x));

const sqrt = (x: number): number => sqrtIter(1, x);

/*
    `sqrt` won't work, since `conditional`'s arguments are both evaluated, unlike the ternary conditional, thus leading to a stack overflow.
*/
