"use strict";
var d = new Date();
console.log(d);
var da = new Date(1000);
var db = new Date(2000);
console.log(da); //1970-01-01T00:00:01.000Z
console.log(db); //1970-01-01T00:00:02.000Z
var d1 = new Date('2018/09/06 05:30:00');
var d2 = new Date('2018-09-06 05:30:00');
var d3 = new Date('2018-09-06T05:30:00');
console.log(d1);
console.log(d2);
console.log(d3);
var reg1 = new RegExp('jspang');
console.log(reg1);
var reg2 = new RegExp('jspang', 'gi');
console.log(reg2);
var reg3 = /jspang/;
var reg4 = /jspang/gi;
console.log(reg3);
console.log(reg4);
var reg5 = /jspang/i;
var website = 'jspang.com';
var result5 = reg5.test(website);
console.log(result5); //true
console.log(reg5.exec(website));
//[ 'jspang', index: 0, input: 'jspang.com' ]
console.log(website.match(reg5));
