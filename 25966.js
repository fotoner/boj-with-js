const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, q] = input.shift().split(' ').map(Number);

const arr = Array.from({ length: n }, () => null);
const rowMap = Array.from({ length: n }, (_, i) => i);

for (let i = 0; i < n; i++) {
  arr[i] = input.shift().split(' ').map(Number);
}

const commands = input.splice(0, q).map(line => line.split(' ').map(Number));

for (let i = 0; i < q; i++) {
  const command = commands[i];

  if (command[0] == 1) {
    if (command[1] == command[2]) continue;
    [rowMap[command[1]], rowMap[command[2]]] = [rowMap[command[2]], rowMap[command[1]]];
  } else {
    arr[rowMap[command[1]]][command[2]] = command[3];
  }
}
const output = rowMap.map(index => arr[index].join(' ')).join('\n');
console.log(output);
