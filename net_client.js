const net = require('net')

const client = net.connect('8080', () => {
	console.log('connected to server')
})

client.on('error', () => {
	console.log('fail to connect to server')
})

client.write(process.argv.slice(2).toString())
client.end()

