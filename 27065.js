const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

const add = (a, b) => a + b;

const getDivisors = number => {
  const res = new Set();
  let sqrt = Math.sqrt(number);
  for (let i = 0; i <= sqrt; i++) {
    if (number % i === 0) {
      res.add(number / i);
      res.add(i);
    }
  }

  return [...res].sort((a, b) => a - b);
};

input.forEach(year => {
  const numbers = getDivisors(year);

  let isOverNumber = numbers.map((val, idx) => {
    if (idx === 0) return 0;
    const sum = getDivisors(val).slice(0, -1).reduce(add);

    return sum <= val ? 0 : 1;
  });

  console.log(isOverNumber.reduce(add) === 1 ? 'Good Bye' : 'BOJ 2022');
});
