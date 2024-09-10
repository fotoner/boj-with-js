const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const num = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(n).fill(false);

const res = new Set();
const dfs = (cnt, str) => {
  if (cnt === m) {
    res.add(str.trim());
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(cnt + 1, `${str} ${num[i]}`);
    visited[i] = false;
  }
};

dfs(0, '');

console.log([...res.keys()].join('\n'));
