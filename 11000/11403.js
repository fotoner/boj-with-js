const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const g = input.map(str => str.split(' ').map(Number));

g.map((_, i) => {
  g.map((_, j) => {
    g.map((_, k) => {
      if (g[j][i] && g[i][k]) g[j][k] = 1;
    });
  });
});

g.map(row => console.log(row.join(' ')));
