const path = require('node tutorial/2-path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'text.text')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)