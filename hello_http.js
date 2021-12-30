require('http').createServer((req, res) => {
	res.writeHeader(200, {'Content-Type': 'text/plain'})
	res.end('Hello world')
}).listen(8081, '127.0.0.1', () =>
	console.log('Server running at http://127.0.0.1:8081/'))
