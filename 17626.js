const num = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const dp = new Array(num + 1).fill(0);
dp[1] = 1;

for (let i = 1; i <= num; i++) {
  let min = Number.MAX_VALUE;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j]);
  }
  dp[i] = min + 1;
}

console.log(dp[num]);
