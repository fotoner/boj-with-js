const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const board = input.shift().split(' ').map(Number);
board.sort((a, b) => a - b);
const [h, w] = board;

const maxLength = w;
const maxSize = h * w;

input.shift();

const sticker = input
  .map(str => str.split(' ').map(Number))
  .map(arr => arr.sort((a, b) => a - b))
  .filter(arr => {
    const [r, c] = arr;
    return r <= maxLength && c <= maxLength && r * c <= maxSize;
  });

sticker.sort((a, b) => b[0] * b[1] - a[0] * a[1]);

let sum = 0;
if (input.length !== 0) {
  for (let i = 0; i < sticker.length; i++) {
    for (let j = i + 1; j < sticker.length; j++) {
      const [r1, c1] = sticker[i];
      const [r2, c2] = sticker[j];

      const curSize = r1 * c1 + r2 * c2;
      if (curSize > maxSize) {
        continue;
      }

      if (r1 + r2 <= h && Math.max(c1, c2) <= w) {
        sum = Math.max(sum, curSize);
      } else if (r1 + r2 <= w && Math.max(c1, c2) <= h) {
        sum = Math.max(sum, curSize);
      } else if (r1 + c2 <= h && Math.max(c1, r2) <= w) {
        sum = Math.max(sum, curSize);
      } else if (r1 + c2 <= w && Math.max(c1, r2) <= h) {
        sum = Math.max(sum, curSize);
      } else if (c1 + r2 <= h && Math.max(r1, c2) <= w) {
        sum = Math.max(sum, curSize);
      } else if (c1 + r2 <= w && Math.max(r1, c2) <= h) {
        sum = Math.max(sum, curSize);
      } else if (c1 + c2 <= h && Math.max(r1, r2) <= w) {
        sum = Math.max(sum, curSize);
      } else if (c1 + c2 <= w && Math.max(r1, r2) <= h) {
        sum = Math.max(sum, curSize);
      }
    }
  }
}

console.log(sum);
