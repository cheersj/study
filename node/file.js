var http = require('http')
var fs = require('fs')
var server = http.createServer()
var handleRequest = function(request, response){
	var url = request.url
	if(url === '/'){
		response.writeHead(200,{
			"Content-Type":"text/html"
		})
		fs.readFile('./data/index.html','utf-8',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})			
	} else if (url === '/login') {
		response.writeHead(200,{
			"Content-Type":"text/html"
		})
		fs.readFile('./data/login.html','utf-8',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})				
	} else if (url === '/register') {
		response.writeHead(200,{
			"Content-Type":"text/html"
		})
		fs.readFile('./data/register.html','utf-8',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})				
	} else if (url === '/css/main.css') {
		response.writeHead(200,{
			"Content-Type":"text/css"
		})
		fs.readFile('./data/css/main.css','utf-8',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})				
	} else if (url === '/haha') {
		response.writeHead(200,{
			"Content-Type":"image/png"
		})
		fs.readFile('./data/img/haha.png',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})				
	} else {
		response.writeHead(200,{
			"Content-Type":"text/html"
		})
		fs.readFile('./data/404.html','utf-8',function(err, data){
			if(err){
				throw err
			}		
			response.end(data)
		})			
	}
}
server.on('request', handleRequest)
server.listen(3000, function(){
	console.log('Server is running at port 3000')	
})