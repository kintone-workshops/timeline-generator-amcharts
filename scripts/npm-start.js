'use strict';
const runAll = require('npm-run-all');

runAll(['dev', 'upload'], {
  parallel: true,
  stdout: process.stdout,
  stdin: process.stdin
}).catch((results) => {
  console.log(results);
});