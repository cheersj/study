// 变量的作用域 函数划分
// var yangzi:string = '刘德华'
// function zhengXing():void {
//   var  yangzi:string = 'undefined';
//   console.log('技术胖整形成了'+yangzi+'的样子')
//   yangzi = '马德华';
//   console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)

function zhengXing():void {
  var yangzia:string = '刘德华'
  {
    let yangzib:string = '小沈阳';
    console.log('技术胖整形成了'+yangzib+'的样子');
  }
  console.log('技术胖整形成了'+yangzia+'的样子')
}
zhengXing()