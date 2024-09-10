const flag = Array(30).fill(false);

require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(val => {
    flag[val - 1] = true;
  });
flag.forEach((val, idx) => {
  !val ? console.log(idx + 1) : null;
});
