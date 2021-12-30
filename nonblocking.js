var fs = require('fs')
fs.readFile('test.txt', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(data.toString())
})
console.log('Program End')
