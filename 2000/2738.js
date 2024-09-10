const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const matrix = [];
for (let i = 0; i < n; i++) {
  matrix.push(input.shift().split(' ').map(Number));
}
for (let i = 0; i < n; i++) {
  input
    .shift()
    .split(' ')
    .map((val, idx) => (matrix[i][idx] += Number(val)));
  console.log(matrix[i].join(' '));
}
