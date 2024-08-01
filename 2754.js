const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const c = { A: 40, B: 30, C: 20, D: 10, F: 0 };
const g = { '+': 3, 0: 0, '-': -3 };

console.log(input.length !== 2 ? '0.0' : ((c[input[0]] + g[input[1]]) / 10).toFixed(1));
