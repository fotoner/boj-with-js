const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input.shift());

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const map1 = input.map(val => val.split('').map(val => [val, false]));
const map2 = input.map(val =>
  val
    .replaceAll('G', 'R')
    .split('')
    .map(val => [val, false]),
);

const search = map => {
  let count = 0;
  const q = [];

  const bfs = color => {
    while (q.length) {
      const [x, y] = q.pop();

      if (map[y][x][1]) {
        continue;
      }
      map[y][x][1] = true;

      for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];
        if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && map[nextY][nextX][0] == color) {
          q.push([nextX, nextY]);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const [color, visited] = map[i][j];
      if (visited) {
        continue;
      } else {
        count++;
        q.push([j, i]);
        bfs(color);
      }
    }
  }

  return count;
};

const res1 = search(map1);
const res2 = search(map2);

console.log(`${res1} ${res2}`);
