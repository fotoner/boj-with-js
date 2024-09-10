const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

while (input.length > 0) {
  const command = input.shift().split('');
  input.shift();

  let value = JSON.parse(input.shift());
  let flag = false;
  let flip = false;

  command.map(word => {
    if (word === 'R') {
      flip = !flip;
    } else {
      if (value.length === 0) {
        flag = true;
      } else {
        flip ? value.pop() : value.shift();
      }
    }
  });

  console.log(flag ? 'error' : `[${(flip ? value.reverse() : value).join(',')}]`);
}
