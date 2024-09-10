const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
let idx = 0;

input.forEach((line, i) => {
  if (Number.isInteger(Number(line))) {
    max = Number(line);
    idx = i;
  }
});

max += 3 - idx;

const res = (max % 3 === 0 ? 'Fizz' : '') + (max % 5 === 0 ? 'Buzz' : '');
console.log(res || max);
