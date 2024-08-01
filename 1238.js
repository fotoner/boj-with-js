const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, x] = input.shift().split(' ').map(Number);

const goMap = [...Array(n)].map(() => ({}));
const backMap = [...Array(n)].map(() => ({}));

input.forEach(val => {
  const [from, to, cost] = val.split(' ').map(Number);
  goMap[from - 1][to - 1] = cost;
  backMap[to - 1][from - 1] = cost;
});

const dijkstra = map => {
  const q = [];
  q.push([x - 1, 0]);

  const res = Array(n).fill(Number.POSITIVE_INFINITY);
  res[x - 1] = 0;

  while (q.length) {
    const [curNode, curSum] = q.shift().map(Number);
    Object.keys(map[curNode]).forEach(key => {
      const cost = map[curNode][key];
      if (res[key] > curSum + cost) {
        res[key] = curSum + cost;
        q.push([key, res[key]]);
      }
    });
  }
  return res;
};
const goRes = dijkstra(goMap);
const backRes = dijkstra(backMap);
console.log(Math.max(...[...Array(n)].map((_, idx) => goRes[idx] + backRes[idx])));
