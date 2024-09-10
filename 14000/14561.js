const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input.map(val => {
  const [a, n] = val.trim().split(' ');
  const res = BigInt(a).toString(n);
  console.log(res === res.split('').reverse().join('') ? 1 : 0);
});
