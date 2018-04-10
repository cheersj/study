var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function (req, res) {
	var url = req.url
	if(url === '/'){
		fs.readFile('./views/index.html',function(err, data){
			if(err){
				throw err
			}
			res.writeHead(200,{
				'Content-Type':'text/html'
			})
			res.end(data)
		})
	} else if (url.startsWith('/static')){
		var staticFilePath = '.'+url
		fs.readFile(staticFilePath,function(err, data){
			if(err){
				throw err
			}
			res.end(data)	
		})
	}
})

server.listen(3000,function(){
	console.log('Server is running at port 3000.')
	console.log('   Please visit http://127.0.0.1:3000/')
})