const path = require('node tutorial/2-path')

console.log(path.sep)

const { readFileSync } = require('fs');
const data = readFileSync('file.txt', 'utf8');