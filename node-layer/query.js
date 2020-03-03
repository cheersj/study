const querystring = require('querystring');

// get  参数 查询字符串
let str = 'username=admin&password=123456';

// { username: 'admin', password: '123456' }
let obj = {
  username: 'admin',
  password: '123456'
}

console.log(querystring.parse(str));

console.log(querystring.stringify(obj));