const fs = require('fs')
const zlib = require('zlib')

const inStream = fs.createReadStream('test.txt')
const outStream = fs.createWriteStream('output.txt')
const zipStream = fs.createWriteStream('test.gz')

inStream.pipe(zlib.createGzip()).pipe(zipStream)
zipStream.on('finish', () => {
	console.log('File compressed')
	fs.createReadStream('test.gz').pipe(zlib.createGunzip()).pipe(outStream)
})
outStream.on('finish', () => {
	console.log('File uncompressed')
})

console.log('Program End')

