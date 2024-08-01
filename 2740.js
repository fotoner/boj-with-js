const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [AN, AM] = input.shift().split(' ').map(Number);

const a = [];

for (let i = 0; i < AN; i++) {
  a.push(input.shift().split(' ').map(Number));
}

const [BN, BM] = input.shift().split(' ').map(Number);

const b = [];

for (let i = 0; i < BN; i++) {
  b.push(input.shift().split(' ').map(Number));
}

const res = Array.from({ length: AN }, () => Array.from({ length: BM }, () => 0));

for (let i = 0; i < AN; i++) {
  for (let j = 0; j < BM; j++) {
    res[i][j] = a[i].map((val, idx) => b[idx][j] * val).reduce((a, b) => a + b);
  }
}

res.forEach(val => console.log(val.join(' ')));
