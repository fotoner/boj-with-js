const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  free() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}

let x = 0;
let y = 0;

const map = [...Array(n)].map((_, i) =>
  input[i].split('').map((val, j) => {
    if (val === 'I') {
      x = i;
      y = j;
    }
    return val;
  }),
);
const visited = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const q = new Queue();
let count = 0;
q.push([x, y]);

while (q.length > 0) {
  const [x, y] = q.pop();
  if (visited[x][y] || map[x][y] === 'X') continue;
  else visited[x][y] = true;

  if (map[x][y] === 'P') count += 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    q.push([nx, ny]);
  }
}

console.log(count > 0 ? count : 'TT');
