const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const MOD = 1000000007;
let a = 1;
let b = 1;
for (let i = 0; i < n; i++) {
  a = (a * m) % MOD;
  b = (b * (m - 1)) % MOD;
}

console.log((a - b + MOD) % MOD);
