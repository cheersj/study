var http = require('http')
var server = http.createServer()
var handleRequest = function(request, response){
	var url = request.url
	if(url === '/'){
		response.end('<h1>index page</h1>')			
	} else if (url === '/login') {
		response.end('login page')	
	} else if (url === '/register') {
		response.writeHead(200,{
			"Content-Type":"text/html"
		})
		response.end('<strong>register page</strong>')	
	} else {
		response.end('404 Not Found')	
	}
}
server.on('request', handleRequest)
server.listen(3000, function(){
	console.log('Server is running at port 3000')	
})