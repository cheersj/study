"use strict";
var jspang8 = '技术';
var jspang8a = new String('jspang');
console.log(jspang8);
console.log(jspang8a);
console.log(jspang8.length);
console.log(jspang8a.length);
var something = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。";
var xiaoJieJie = "小姐姐";
console.log(something.indexOf(xiaoJieJie)); //19
console.log(something.lastIndexOf(xiaoJieJie)); //19
console.log(something.substring(8));
console.log(something.substring(8, 14));
console.log(something.replace(xiaoJieJie, '小哥哥'));
