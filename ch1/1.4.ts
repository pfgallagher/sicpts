export {};

const plus = (a: number, b: number): number => a + b;

const minus = (a: number, b: number): number => a - b;

const aPlusAbsB = (a: number, b: number): number =>
	(0 <= b ? plus : minus)(a, b);

const verboseAPlusAbsB = (a: number, b: number): number => {
	if (0 <= b) {
		return plus(a, b);
	}
	return minus(a, b);
};

/* 
    `(0 <= b ? plus : minus)` resolves to a function: `plus` or `minus`, based on the value of `b`.
    The function that resolves is then ('applied' | 'invoked' | 'called') with arguments `a` and `b`.
    `verboseAPlusAbsB` is equivalent, albeit not as concise.
*/
