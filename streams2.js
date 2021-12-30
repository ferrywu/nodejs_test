const fs = require('fs')
const rs = fs.createReadStream('test.txt')
const ws = fs.createWriteStream('output.txt')
rs.pipe(ws)
console.log('Program End')

