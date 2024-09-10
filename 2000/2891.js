const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s, r] = input.shift().split(' ').map(Number);
const arr = Array(n).fill(1);

input
  .shift()
  .trim()
  .split(' ')
  .forEach(val => (arr[Number(val) - 1] -= 1));
input
  .shift()
  .trim()
  .split(' ')
  .forEach(val => (arr[Number(val) - 1] += 1));

for (let i = 0; i < arr.length; i++) {
  if (0 < i && arr[i] == 2 && arr[i - 1] == 0) {
    arr[i] = 1;
    arr[i - 1] = 1;
  } else if (i < arr.length - 1 && arr[i] == 2 && arr[i + 1] == 0) {
    arr[i] = 1;
    arr[i + 1] = 1;
  }
}

console.log(arr.filter(val => val == 0).length);
