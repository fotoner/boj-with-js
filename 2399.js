const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const values = input[0].split(' ').map(Number);
values.sort((a, b) => a - b);

let totlalSum = BigInt(0);
let prefixSum = BigInt(0);

for (let i = 0; i < values.length; i++) {
  totlalSum += BigInt(values[i] * i) - prefixSum;
  prefixSum += BigInt(values[i]);
}

console.log((totlalSum * 2n).toString());
