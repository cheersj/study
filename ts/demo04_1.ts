function searchXiaoJieJie1(age:number,stature?:string):string{

  let yy:string = ''
  yy = '找到了'+age+'岁'
  if(stature !=undefined){
      yy = yy + stature
  }
  return yy+'的小姐姐'

}

var result1:string  =  searchXiaoJieJie1(22,'大长腿')
console.log(result1)

function searchXiaoJieJie2(age:number=18,stature:string='大胸'):string{

  let yy:string = ''
  yy = '找到了'+age+'岁'
  if(stature !=undefined){
      yy = yy + stature
  }
  return yy+'的小姐姐'

}

var result2:string  =  searchXiaoJieJie2()
console.log(result2)

function searchXiaoJieJie3(...xuqiu:string[]):string{
    console.log(xuqiu);
  let  yy:string = '找到了'
  for (let i =0;i<xuqiu.length;i++){
      yy = yy + xuqiu[i]
      if(i<xuqiu.length){
          yy=yy+'、'
      }
  }
  yy=yy+'的小姐姐'
  return yy

}

var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)