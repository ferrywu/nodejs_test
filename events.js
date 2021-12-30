var events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('connection', () => {
        console.log('connection successful')
        eventEmitter.emit('data_receive')
})

eventEmitter.on('data_receive', () => {
	console.log('data received')
})

eventEmitter.emit('connection')
console.log('Program End')

