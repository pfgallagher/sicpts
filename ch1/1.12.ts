const pascalTriangle = (r: number, c: number): number =>
	!c || r === c ? 1 : pascalTriangle(r - 1, c - 1) + pascalTriangle(r - 1, c);
