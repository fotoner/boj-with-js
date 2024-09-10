const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());

const bfs = q => {
  let max = 0;
  let from = 0;
  const visited = Array(n + 1).fill(false);

  while (q.length > 0) {
    const { node, sum } = q.shift();
    visited[node] = true;
    if (max < sum) {
      max = sum;
      from = node;
    }

    Object.keys(tree[node]).map(next => {
      if (visited[next]) return;
      q.push({ node: next, sum: sum + tree[node][next] });
    });
  }
  return [max, from];
};

const tree = [...Array(n + 1)].map(() => {
  return {};
});

input.map(val => {
  const [from, to, cost] = val.split(' ').map(Number);
  tree[from][to] = cost;
  tree[to][from] = cost;
});

const q = [{ node: 1, sum: 0 }];
const [max, from] = bfs(q);

if (max === 0) {
  console.log(max);
} else {
  q.push({ node: from, sum: 0 });
  const [res] = bfs(q);

  console.log(res);
}
