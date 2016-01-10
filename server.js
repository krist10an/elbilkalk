var morgan = require('morgan')
var express = require('express')
var livereload = require('livereload')

var app = express()
app.use(morgan('dev'))

app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/', express.static(__dirname + '/src'))

app.listen(process.env.PORT, process.env.IP)
console.log('Listening on port ', process.env.PORT, process.env.IP)

app = livereload.createServer({
  exts: ['html', 'css', 'js', 'png', 'gif', 'jpg', 'ts']
})

app.watch(__dirname + '/src')
console.log('Live reload enabled')
