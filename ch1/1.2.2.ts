const recursiveProcessFib = (n: number): number =>
	!n
		? 0
		: n === 1
		? 1
		: recursiveProcessFib(n - 1) + recursiveProcessFib(n - 2);

const phi = (1 + Math.sqrt(5)) / 2;

const constantFib = (n: number): number => Math.round(phi ** n / Math.sqrt(5));

const iterativeProcessFib = (n: number, a = 1, b = 0): number =>
	!n ? b : iterativeProcessFib(n - 1, a + b, a);

for (let i = 0; i < 10; i++) {
	console.log(recursiveProcessFib(i), constantFib(i), iterativeProcessFib(i));
}

const firstDenomination = (kindsOfCoins: number): number =>
	kindsOfCoins === 1
		? 1
		: kindsOfCoins === 2
		? 5
		: kindsOfCoins === 3
		? 10
		: kindsOfCoins === 4
		? 25
		: kindsOfCoins === 5
		? 50
		: 0;

const cc = (amount: number, kindsOfCoins = 5): number =>
	!amount
		? 1
		: amount < 0 || !kindsOfCoins
		? 0
		: cc(amount, kindsOfCoins - 1) +
		  cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins);
