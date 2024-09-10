const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const d = Array.from({ length: n }, () => Array.from({ length: n }, () => Number.POSITIVE_INFINITY));
[...Array(n)].map((_, idx) => {
  d[idx][idx] = 0;
});

input.map(val => {
  const [a, b] = val.split(' ').map(str => Number(str) - 1);
  d[a][b] = 1;
  d[b][a] = 1;
});

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      d[j][k] = Math.min(d[j][k], d[j][i] + d[i][k]);
    }
  }
}

let min = Number.POSITIVE_INFINITY;
let res = -1;
d.map((dists, idx) => {
  const val = dists.reduce((a, b) => a + b, 0);
  if (min > val) {
    min = val;
    res = idx;
  }
});

console.log(res + 1);
