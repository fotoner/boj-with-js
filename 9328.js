const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let TC = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (TC) {
  const [r, c] = input.shift().split(' ').map(Number);

  const map = Array.from({ length: r }, () => ('.' + input.shift() + '.').split(''));
  map.unshift(Array.from({ length: c + 2 }).fill('.'));
  map.push(Array.from({ length: c + 2 }).fill('.'));

  const keys = new Set(input.shift().toUpperCase());
  const doors = {};

  const s = [[0, 0]];
  const visited = Array.from({ length: r + 2 }, () => Array.from({ length: c + 2 }, () => false));
  let count = 0;
  while (s.length) {
    const [curY, curX] = s.pop();
    visited[curY][curX] = true;
    const curValue = map[curY][curX];

    if (curValue === '$') {
      map[curY][curX] = '.';
      count++;
    } else if (curValue == '.') {
    } else if (curValue == curValue.toLowerCase()) {
      const newKey = curValue.toUpperCase();
      keys.add(newKey);
      map[curY][curX] = '.';

      const curDoors = doors[newKey];

      if (curDoors != undefined) {
        while (curDoors.length) {
          const [doorY, doorX] = curDoors.pop();
          visited[doorY][doorX] = false;
          map[doorY][doorX] = '.';
          s.push([doorY, doorX]);
        }
      }
    } else if (curValue == curValue.toUpperCase()) {
      if (keys.has(curValue)) {
        map[curY][curX] = '.';
      } else {
        if (doors[curValue] == undefined) {
          doors[curValue] = [];
        }
        doors[curValue].push([curY, curX]);
        continue;
      }
    }

    for (let i = 0; i < 4; i++) {
      const newX = curX + dx[i];
      const newY = curY + dy[i];

      if (0 <= newY && newY < r + 2 && 0 <= newX && newX < c + 2 && map[newY][newX] != '*' && !visited[newY][newX])
        s.push([newY, newX]);
    }
  }

  console.log(count);
  TC--;
}
