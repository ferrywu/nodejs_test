const net = require('net')

const server = net.createServer((connection) => {
	console.log('client connected')

	connection.on('data', (data) => {
		if (data == 'test1') {
			console.log('receive test case 1')
		} else if (data == 'test2') {
			console.log('receive test case 2')
		} else {
			console.log('receive ' + data)
		}
	})

	connection.on('end', () => {
		console.log('client disconnected')
	})
})

server.listen('8080', () => {
	console.log('server is listening')
})

