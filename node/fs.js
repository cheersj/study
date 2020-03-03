// 加载操作文件的模块包
// fs 是 node 平台提供的一个核心模块，专门用来操作文件 
var fs = require('fs')

// 写入文件
// fs.writeFile('./data/a.txt', 'hello world', function(err){
// 	if(err){
// 		return	console.log('写入文件失败了')
// 	}
// 	console.log('写入文件成功了')
// })

// 读取文件
fs.readFile('./data/a.txt', 'utf-8', function(err, data){
	if(err){
		throw err	// 使用throw能抛出错误信息
	}
	console.log(data)	// 参数配置上编码后，不然二进制转16进制显示
	// console.log(data.toString('utf8'))
})
