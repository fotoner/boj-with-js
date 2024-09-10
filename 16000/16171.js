const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input[0].split('').filter(isNaN).join('').search(input[1]) !== -1 ? 1 : 0);
