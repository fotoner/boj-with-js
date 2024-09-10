const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const known = Array(10).fill(false);
const passwordKey = [...Array(10).keys()].map(Number);

for (let i = 0; i < m; i++) {
  known[i] = true;
}
let res = 0;

const dfs = (curPassword, count) => {
  if (curPassword.length == n) {
    if (count == m) res++;
    return;
  }

  passwordKey.forEach(key => {
    if (known[key]) {
      known[key] = false;
      dfs(curPassword + key, count + 1);
      known[key] = true;
    } else {
      dfs(curPassword + key, count);
    }
  });
};
dfs('', 0);
console.log(res);
