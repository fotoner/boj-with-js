const readline = require('readline');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const n = Array.of({ length: Number(input.shift()) }, () => 0);

  input
    .map(val => val.split(' ').map(Number))
    .forEach((arr, i) => {
      arr.forEach((val, j) => {
        if (i == j) return;
        n[i] |= val;
      });
    });

  console.log(n.join(' '));
});
