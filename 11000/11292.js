const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

while (true) {
  const n = Number(input.shift());
  if (n === 0) break;

  let max = 0;

  console.log(
    [...Array(n)]
      .map(() => {
        const [name, height] = input.shift().split(' ');
        max = Math.max(max, Number(height));

        return { name: name, height: Number(height) };
      })
      .sort((a, b) => b.height - a.height)
      .filter(val => val.height === max)
      .map(val => val.name)
      .join(' '),
  );
}
