const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = input.shift().split(' ').map(Number);

const map = input.map(row => row.split('').map(val => (val === '.' ? 0 : 1)));

const dy = [-1, 0, 1];

const dfs = (y, x) => {
  if (x === c - 1) return true;
  map[y][x] = 2;

  for (let i = 0; i < dy.length; i++) {
    const nextY = y + dy[i];

    if (nextY >= 0 && nextY < r && map[nextY][x + 1] === 0 && dfs(nextY, x + 1)) return true;
  }
  return false;
};

let count = 0;
for (let i = 0; i < r; i++) {
  if (dfs(i, 0)) count++;
}

console.log(count);
