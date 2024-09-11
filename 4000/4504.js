const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
input.pop();

input.forEach(val => {
  const value = Number(val);

  if (value % n == 0) {
    console.log(`${value} is a multiple of ${n}.`);
  } else {
    console.log(`${value} is NOT a multiple of ${n}.`);
  }
});
