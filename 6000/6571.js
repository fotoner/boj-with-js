const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const dp = [0n, 1n, 2n];

while (dp.at(-1) < 10n ** 100n) {
  dp.push(dp.at(-1) + dp.at(-2));
}

while (input.length) {
  const [a, b] = input.shift().split(' ').map(BigInt);
  let count = 0;

  for (let i = 1; i < dp.length; i++) {
    if (b < dp[i]) break;
    else if (a <= dp[i]) count++;
  }
  console.log(count);
}
