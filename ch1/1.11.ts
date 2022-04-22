const recursive = (n: number): number =>
	n < 3 ? n : recursive(n - 1) + 2 * recursive(n - 2) + 3 * recursive(n - 3);

const iterative = (n: number, a = 2, b = 1, c = 0): number =>
	!n ? c : iterative(n - 1, a + 2 * b + 3 * c, a, b);
