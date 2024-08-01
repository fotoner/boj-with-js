const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const arr = input.map(Number).sort((a, b) => a - b);

let curCount = 1;
let curValue = arr.shift();

while (arr.length > 0) {
  const value = arr.shift();

  if (value - curValue !== 1) {
    curCount = 1;
    curValue = value;
    continue;
  } else {
    curCount++;
    curValue = value;
  }
}
console.log(5 - curCount);
