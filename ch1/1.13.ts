export {};

const definitionalFib = (n: number): number =>
	!n ? 0 : n === 1 ? 1 : definitionalFib(n - 1) + definitionalFib(n - 2);

const phi = (1 + Math.sqrt(5)) / 2;

const fib = (n: number): number => Math.round(phi ** n / Math.sqrt(5));

const psi = 1 - phi; // i.e. (1 - sqrt(5)) / 2

const fibToProve = (n: number): number => (phi ** n - psi ** n) / Math.sqrt(5);

// Cases:

// fib(0) = (phi ** 0 - psi ** 0) / Math.sqrt(5)
// fib(0) = 0 / Math.sqrt(5)
// fib(0) = 0

// fib(1) = (phi ** 1 - psi ** 1) / Math.sqrt(5)
// fib(1) = (phi - psi) / Math.sqrt(5)
// fib(1) = Math.sqrt(5) / Math.sqrt(5)
// fib(1) = 1

// fib(n + 1) = fib(n) + fib(n - 1)
// fib(n + 1) = (phi ** n - psi ** n) / Math.sqrt(5) + (phi ** (n - 1) - psi ** (n - 1) / Math.sqrt(5))
// fib(n + 1) = phi ** n + phi ** (n - 1) - psi ** n - psi ** (n - 1) / Math.sqrt(5)
//      Note: a ** n + a ** (n + 1) is equivalent to a ** (n - 1) * (n - 1) - why does this seem nontrivial?
// fib(n + 1) = phi ** (n - 1) * (phi + 1) - (psi ** (n - 1) * (psi + 1)) / Math.sqrt(5)
//      Note: phi + 1 is equivalent to phi ** 2 and psi + 1 is equivalent to psi ** 2
// fib(n + 1) = phi ** (n - 1) * phi ** 2 - (psi ** (n - 1) * psi ** 2) / Math.sqrt(5)
// fib(n + 1) = phi ** (n + 1) - psi ** (n + 1) / Math.sqrt(5)

// Induction proof completed by showing fib(0), fib(1), and fib(n + 1).

// Closest integer proof:
// Math.abs(fib(n) - phi ** n / Math.sqrt(5)) < 1 / 2

// Math.abs((phi ** n - psi ** n) / Math.sqrt(5) - phi ** n / Math.sqrt(5)) < 1 / 2
// Math.abs(phi ** n - psi ** n - phi ** n / Math.sqrt(5)) < 1 / 2
// Math.abs(-(psi ** n) / Math.sqrt(5)) < 1 / 2
// Largest value of psi ** n is 1 (psi ** 0)
// 1 / Math.sqrt(5) = ~0.4472
// 0.4472 < 1 / 2

// Closest integer proof completed by showing 0.4472 < 1 / 2
