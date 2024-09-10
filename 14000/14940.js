const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.map(val => val.split(' ').map(Number));

const queue = [[-1, -1, 0]];

board.forEach((row, i) => {
  row.forEach((val, j) => {
    if (val === 2) {
      queue[0][0] = i;
      queue[0][1] = j;
    }
    board[i][j] = val > 0 ? -1 : 0;
  });
});

while (queue.length > 0) {
  const [y, x, depth] = queue.shift();

  if (x < 0 || x >= m || y < 0 || y >= n || board[y][x] >= 0) {
    continue;
  }

  board[y][x] = depth;

  queue.push([y + 1, x, depth + 1]);
  queue.push([y - 1, x, depth + 1]);
  queue.push([y, x + 1, depth + 1]);
  queue.push([y, x - 1, depth + 1]);
}

board.forEach(row => {
  console.log(row.join(' '));
});
