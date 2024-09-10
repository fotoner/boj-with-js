const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());

if (n === 0) {
  console.log('divide by zero');
  return;
}

const value = input
  .shift()
  .split(' ')
  .map(Number)
  .reduce((a, b) => a + b);

console.log(value == 0 ? 'divide by zero' : '1.00');
