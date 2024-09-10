const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
console.log(a + b - c);
console.log(String(a) + b - c);
