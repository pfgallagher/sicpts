export {};

const p = (): void => p(); // Infinite recursion leading to stack overflow. I'm not really sure how to type this: typing it as `never` interestingly doesn't cause a warning / error where it's called below, so I stuck with `void`, which does.

const test = (x: number, y: number): number => (!x ? 0 : y);

test(0, p());
/*
    Since TypeScript / JavaScript use applicative-order evaluation, `p` will get called when the arguments to `test` are being resolved. Thus, running this file will result in a stack overflow.
    If normal-order evaluation were used, `test(0, p())` would resolve to `0`, since `p` wouldn't get called when `x` is 0.
*/
