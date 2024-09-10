const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
input.shift();

const d = Array.from({ length: n }, () => Array.from({ length: n }, () => Number.POSITIVE_INFINITY));
[...Array(n)].map((_, idx) => {
  d[idx][idx] = 0;
});

input.forEach(str => {
  const [a, b, c] = str.split(' ').map(Number);
  d[a - 1][b - 1] = Math.min(c, d[a - 1][b - 1]);
});

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      d[j][k] = Math.min(d[j][k], d[j][i] + d[i][k]);
    }
  }
}

d.forEach(arr => console.log(arr.map(val => (!Number.isFinite(val) ? 0 : val)).join(' ')));
