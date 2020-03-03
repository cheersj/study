var http = require('http')

var server = http.createServer()

var handleRequest = function(request, response){
	console.log('收到客户端请求了')
	console.log('当前的请求路径是：', request.url)
	response.write('hello')
	response.write(' world')
	response.end()
}

server.on('request', handleRequest)

server.listen(8080, function(){
	console.log('Server is running at port 8080')	
})