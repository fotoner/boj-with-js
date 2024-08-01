const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const log = console.log;

let max = 0;
let maxIndex = 0;

for (let i = 0; i < input.length; i++) {
  if (max < Number(input[i])) {
    max = Number(input[i]);
    maxIndex = i + 1;
  }
}

log(max);
log(maxIndex);
