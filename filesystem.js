const fs = require('fs')
let buf = new Buffer(1024)
let folder = 'test'
let rpath = 'test.txt'
let ts = parseInt(Date.now()/1000)
let wpath = folder + '/' + ts + '.txt'

fs.mkdir(folder, (err) => {
  if (err) {
    if (err.code != 'EEXIST') {
      console.error('create ' + folder + ' folder fail', err)
      return
    }
    console.log(folder + ' folder already exist')
  } else {
    console.log('create ' + folder + ' folder success')
  }

  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error('read ' + folder + ' folder fail', err)
      return
    }
    console.log('list files in ' + folder + ' folder')
    files.forEach((file) => console.log(file))
    console.log('')

    fs.open(rpath, 'r', (err, rfd) => {
      if (err) {
        console.error('open ' + rpath + ' fail', err)
        return
      }
      console.log('open ' + rpath + ' success')

      fs.read(rfd, buf, 0, buf.length, 0, (err, rbytes) => {
        if (err) {
          console.error('read ' + rpath + ' fail', err)
          return
        }
        console.log('read ' + rbytes + ' bytes from ' + rpath)

        fs.close(rfd, (err) => {
          if (err) {
            console.error('close ' + rpath + ' fail', err)
            return
          }
          console.log('close ' + rpath + ' success')
          console.log('')

          fs.open(wpath, 'w', (err, wfd) => {
            if (err) {
              console.err('create ' + wpath + ' fail', err)
              return
            }
            console.log('create ' + wpath + ' success')

            fs.write(wfd, buf, 0, rbytes, 0, (err, wbytes) => {
              if (err) {
                console.err('write ' + wpath + ' fail', err)
                return
              }
              console.log('write ' + wbytes + ' bytes to ' + wpath)

              fs.close(wfd, (err) => {
                  if (err) {
                    console.log('close ' + wpath + ' fail')
                    return
                  }
                  console.log('close ' + wpath + ' success')
              })
            })
          })
        })
      })
    })
  })
})

