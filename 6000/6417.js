const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

input.forEach(str => {
  const coconuts = Number(str);

  if (coconuts === -1) return;

  let found = false;

  for (let k = Math.floor(Math.log(coconuts + 1) / Math.log(2)); k > 1; k--) {
    let current = coconuts;
    let valid = true;

    for (let i = 0; i < k; i++) {
      if ((current - 1) % k === 0) {
        current = current - 1 - Math.floor((current - 1) / k);
      } else {
        valid = false;
        break;
      }
    }

    if (valid && current % k === 0) {
      console.log(`${coconuts} coconuts, ${k} people and 1 monkey`);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`${coconuts} coconuts, no solution`);
  }
});
