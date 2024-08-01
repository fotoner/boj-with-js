console.log(Number(require('fs').readFileSync('/dev/stdin').toString().trim()) % 2 === 0 ? 'SK' : 'CY');
