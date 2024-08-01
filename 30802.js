const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const [t, p] = input[2].split(' ').map(Number);

console.log(
  input[1]
    .split(' ')
    .map(Number)
    .map(shirt => Math.ceil(shirt / t))
    .reduce((acc, cur) => acc + cur),
);
console.log(`${Math.floor(n / p)} ${n % p}`);
