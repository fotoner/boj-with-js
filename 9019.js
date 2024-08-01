const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.shift();

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

const solve = (a, b) => {
  const visited = Array(10001).fill(false);
  const q = new Queue();

  q.push([a, '']);

  while (q.length > 0) {
    const [num, command] = q.pop();
    if (num === b) return command;
    if (visited[num]) continue;
    else visited[num] = true;

    q.push([(num * 2) % 10000, command + 'D']);
    q.push([num === 0 ? 9999 : num - 1, command + 'S']);
    q.push([(num * 10 + Math.floor(num / 1000)) % 10000, command + 'L']);
    q.push([Math.floor(num / 10) + (num % 10) * 1000, command + 'R']);
  }
};

while (input.length > 0) {
  const [a, b] = input.shift().split(' ').map(Number);
  console.log(solve(a, b));
}
