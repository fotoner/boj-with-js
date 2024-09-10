const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());

console.log(Math.max(...input[0].split(' ').map((val, idx) => val - n + idx)));
