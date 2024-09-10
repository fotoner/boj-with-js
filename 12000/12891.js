const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [s, p] = input.shift().split(' ').map(Number);
const dnaArray = input.shift().split('');
const dnaRequire = input.shift().split(' ').map(Number);

const dnaMap = { A: dnaRequire[0], C: dnaRequire[1], G: dnaRequire[2], T: dnaRequire[3] };
const dnaCount = { A: 0, C: 0, G: 0, T: 0 };
const dnaKey = Object.keys(dnaMap);

const currDna = dnaArray.slice(0, p);
currDna.forEach(dna => dnaCount[dna]++);

let count = 0;

for (let i = 0; i <= s - p; i++) {
  let isDnaString = true;
  dnaKey.forEach(key => {
    if (dnaCount[key] < dnaMap[key]) isDnaString = false;
  });
  count += isDnaString ? 1 : 0;

  const lastDna = dnaArray[i];
  const newDna = dnaArray[i + p];

  dnaCount[lastDna]--;
  dnaCount[newDna]++;
}

console.log(count);
