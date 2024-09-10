const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const map = input.map(val => val.split('').map(Number));
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [false, false]));

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.queue[this.head];
    this.head++;
    if (this.head * 2 >= this.queue.length) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }
    return value;
  }

  isEmpty() {
    return this.queue.length === this.head;
  }
}

const directions = [
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1 },
];

const q = new Queue();
q.enqueue({ x: 0, y: 0, isBreak: false, count: 1 });

visited[0][0][0] = true;

while (!q.isEmpty()) {
  const { x, y, isBreak, count } = q.dequeue();

  if (x === n - 1 && y === m - 1) {
    console.log(count);
    return;
  }

  for (const { dx, dy } of directions) {
    const nx = x + dx;
    const ny = y + dy;
    const nextBreak = isBreak ? 1 : 0;

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (map[nx][ny] === 0 && !visited[nx][ny][nextBreak]) {
        visited[nx][ny][nextBreak] = true;
        q.enqueue({ x: nx, y: ny, isBreak: isBreak, count: count + 1 });
      }

      if (map[nx][ny] === 1 && !isBreak && !visited[nx][ny][1]) {
        visited[nx][ny][1] = true;
        q.enqueue({ x: nx, y: ny, isBreak: true, count: count + 1 });
      }
    }
  }
}

console.log(-1);
