const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

input.forEach(el => {
  console.log(el.length === 0 ? '' : el[0] + el.slice(-1));
});
