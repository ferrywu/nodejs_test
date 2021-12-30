const fs = require('fs')
var data = ''

const rs = fs.createReadStream('test.txt')
rs.setEncoding('UTF-8')
rs.on('data', (chunk) => data += chunk)
rs.on('end', () => {
	const ws = fs.createWriteStream('output.txt')
	ws.write(data, 'UTF-8')
	ws.end()
	ws.on('finish', () => console.log('Write Finish'))
})

console.log('Program End')

