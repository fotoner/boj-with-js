const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input[0].at(Number(input[1] - 1)));
