var events = require('events')
var eventEmitter = new events.EventEmitter()

var listener1 = () => {
	console.log('This is listener1')
}

var listener2 = () => {
	console.log('This is listener2')
}

var listener3 = () => {
	console.log('This is listener3')
}

eventEmitter.addListener('connection', listener1)
eventEmitter.on('connection', listener2)
eventEmitter.addListener('connection', listener3)
eventEmitter.emit('connection')
console.log('listener count of connection = ' + events.EventEmitter.listenerCount(eventEmitter, 'connection'))

eventEmitter.on('connection', listener1)
eventEmitter.addListener('connection', listener2)
eventEmitter.emit('connection')
console.log('listener count of connection = ' + events.EventEmitter.listenerCount(eventEmitter, 'connection'))

eventEmitter.removeListener('connection', listener1)
eventEmitter.emit('connection')
console.log('listener count of connection = ' + events.EventEmitter.listenerCount(eventEmitter, 'connection'))

console.log('Program End')
