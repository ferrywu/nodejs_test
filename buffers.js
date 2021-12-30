var buf1 = new Buffer(30)
var buf2 = new Buffer('Hello ', 'utf-8')
var buf3 = new Buffer(['w', 'o', 'r', 'l', 'd'])

buf1.write('This is a test')
var buf4 = Buffer.concat([buf1, buf2, buf3])
console.log('buf4.toString')
console.log(buf4.toString())
console.log('buf4.toJSON')
console.log(buf4.toJSON())

var result = buf1.compare(buf2)
if (result < 0)
	console.log(buf1 + " comes before " + buf2)
else if (result == 0)
	console.log(buf1 + " is the same as " + buf2)
else
	console.log(buf1 + " comes after " + buf2)

var buf5 = new Buffer(10)
buf1.copy(buf5, 0, 8)
console.log(buf5.toString())
buf1.copy(buf5, 0, 0, 8)
console.log(buf5.toString())

console.log(buf1.slice(4, 8).toString())

console.log('length of buf4 : ' + buf4.length)

