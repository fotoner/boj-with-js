const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());

if (n === 0) {
  console.log(0);
  return;
}

const rank = input.map(Number);
rank.sort((a, b) => b - a);

const k = Math.round((n * 0.3) / 2);

const sum = rank.slice(k, n - k).reduce((acc, cur) => acc + cur, 0);

console.log(Math.round(sum / (n - 2 * k)));
