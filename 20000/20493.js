const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, t] = input.shift().split(' ').map(Number);

const pos = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];
let curPos = 0;
let lastSec = 0;
const res = [0, 0];

input.forEach(val => {
  const [sec, direction] = val.split(' ');

  res[0] += pos[curPos][0] * (sec - lastSec);
  res[1] += pos[curPos][1] * (sec - lastSec);
  lastSec = sec;

  if (direction == 'right') {
    curPos = (curPos + 1) % 4;
  } else {
    curPos = curPos - 1 < 0 ? 3 : (curPos - 1) % 4;
  }
});
res[0] += pos[curPos][0] * (t - lastSec);
res[1] += pos[curPos][1] * (t - lastSec);
console.log(res.join(' '));
