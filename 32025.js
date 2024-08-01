console.log(Math.min(...require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)) * 50);
