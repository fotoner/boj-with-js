const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let twisted = false;
let spinNumerator = BigInt(1);
let spinDenominator = BigInt(1);

input.forEach(str => {
    const [a, b, c] = str.split(' ').map(Number);
    twisted ^= c;

    spinNumerator *= BigInt(b);
    spinDenominator *= BigInt(a);
});

let gcd = (a, b) => b === BigInt(0) ? a : gcd(b, a % b);
let commonDivisor = gcd(spinNumerator, spinDenominator);

spinNumerator /= commonDivisor;
spinDenominator /= commonDivisor;

let spin = spinNumerator / spinDenominator; 

console.log(`${Number(twisted)} ${spin.toString()}`);