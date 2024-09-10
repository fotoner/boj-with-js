const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

const mergeLine = lines => {
  let [first, last] = lines.shift();

  while (lines.length > 0) {
    const [a, b] = lines.shift();
    if (last < a) break;

    last = b;
  }

  return [first, last];
};

const getLine = width => {
  return input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .map(val => [val - width / 2, val + width / 2]);
};

while (input.length > 0) {
  let [, , width] = input.shift().split(' ').map(Number);

  const nx = getLine(width);
  const ny = getLine(width);
  const [xFirst, xLast] = mergeLine(nx);
  const [yFirst, yLast] = mergeLine(ny);

  console.log(xFirst <= 0 && xLast >= 75 && yFirst <= 0 && yLast >= 100 ? 'YES' : 'NO');
}
