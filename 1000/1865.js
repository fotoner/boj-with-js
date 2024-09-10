const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let TC = Number(input.shift());

while (TC) {
  const [n, m, w] = input.shift().split(' ').map(Number);
  const edges = [];

  [...Array(m)].forEach(_ => {
    const [s, e, t] = input.shift().split(' ').map(Number);
    edges.push([e - 1, s - 1, t]);
    edges.push([s - 1, e - 1, t]);
  });

  [...Array(w)].forEach(_ => {
    const [s, e, t] = input.shift().split(' ').map(Number);
    edges.push([s - 1, e - 1, -t]);
  });

  const bellmanFord = () => {
    const cost = Array.from({ length: n }, () => 987654321);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < edges.length; j++) {
        const [s, e, t] = edges[j];

        if (cost[s] + t < cost[e]) {
          cost[e] = cost[s] + t;
          if (i == n - 1) return 'YES';
        }
      }
    }
    return 'NO';
  };

  console.log(bellmanFord());
  TC--;
}
