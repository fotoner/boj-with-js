const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const v = Number(input.shift());

const dfs = startNode => {
  const stack = [[startNode, 0]];
  const visited = Array(v + 1).fill(false);

  let max = 0;
  let from = startNode;

  while (stack.length) {
    const [node, sum] = stack.pop();
    if (visited[node]) continue;
    visited[node] = true;
    if (max < sum) {
      max = sum;
      from = node;
    }

    tree[node].forEach(([v, d]) => {
      if (!visited[v]) stack.push([v, sum + d]);
    });
  }
  return [max, from];
};

const tree = [...Array(v + 1)].map(() => {
  return [];
});

input.forEach(line => {
  const parts = line.split(' ').map(Number);
  const node = parts[0];
  for (let i = 1; i < parts.length - 1; i += 2) {
    const nextNode = parts[i];
    const weight = parts[i + 1];
    tree[node].push([nextNode, weight]);
  }
});

const [, farthestNode] = dfs(1);
const [diameter] = dfs(farthestNode);

console.log(diameter);
