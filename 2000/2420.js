const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(Math.abs(input[0] - input[1]));
