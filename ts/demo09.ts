let d:Date = new Date()
console.log(d);

let da:Date = new Date(1000)
let db:Date = new Date(2000)
console.log(da)  //1970-01-01T00:00:01.000Z
console.log(db) //1970-01-01T00:00:02.000Z

let d1:Date = new Date('2018/09/06 05:30:00')
let d2:Date = new Date('2018-09-06 05:30:00')
let d3:Date = new Date('2018-09-06T05:30:00')
console.log(d1);
console.log(d2);
console.log(d3);

let reg1:RegExp = new RegExp('jspang')
console.log(reg1)
let reg2:RegExp = new RegExp('jspang', 'gi')
console.log(reg2);
let reg3:RegExp = /jspang/
let reg4:RegExp = /jspang/gi
console.log(reg3);
console.log(reg4);

let reg5:RegExp =  /jspang/i
let website:string = 'jspang.com'
let result5:boolean = reg5.test(website)
console.log(result5)    //true

console.log(reg5.exec(website))
//[ 'jspang', index: 0, input: 'jspang.com' ]

console.log(website.match(reg5));
