console.log(
  require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('')
    .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join(''),
);
