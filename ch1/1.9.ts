export {};

const inc = (x: number): number => x + 1;

const dec = (x: number): number => x - 1;

const plus = (a: number, b: number): number => (!a ? b : inc(plus(dec(a), b)));
/*
	Recursive Process:
		plus(4, 5)
		inc(plus(3, 5))
		inc(inc(plus(2, 5)))
		inc(inc(inc(plus(1, 5))))
		inc(inc(inc(inc(plus(0, 5)))))
		inc(inc(inc(inc(5))))
		inc(inc(inc(6)))
		inc(inc(7))
		inc(8)
		9
*/

const plusIter = (a: number, b: number): number =>
	!a ? b : plusIter(dec(a), inc(b));
/*
	Iterative Process:
		plusIter(4, 5)
		plusIter(3, 6)
		plusIter(2, 7)
		plusIter(1, 8)
		plusIter(0, 9)
		9
*/
