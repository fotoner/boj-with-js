const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const n1 = input[0].split('');
const n2 = input[1].split('');
const t = Number(input[2]);

while (n1.length < t) n1.push('0');
while (n2.length < t) n2.push('0');

const stack = [];

const n1_first = n1.slice(0, t);
const n1_second = n1.slice(t);

const n2_first = n2.slice(0, t).reverse();
const n2_second = n2.slice(t);

for (let i = 0; i < t; i++) {
  stack.push(n2_first.pop());
  stack.push(n1_first.pop());
}

console.log(n1_second.reverse().join('') + stack.filter(val => val != '0').join('') + n2_second.join(''));
