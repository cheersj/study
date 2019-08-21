interface Husband {
  sex:string;
  interest:string;
  maiBaobao?:boolean
}

let myHusband:Husband = {sex: '男', interest: '看书、做家务', maiBaobao: true}
console.log(myHusband);

interface SearchMan{
  (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch = function(source:string,subString:string):boolean{
  let flag = source.search(subString)
  return (flag != -1)
}
console.log(mySearch('高、富、帅、德','胖'));



namespace shuaiGe {
  export class Dehua{
    public name:string = '刘德华'
    talk(){
        console.log('我是帅哥刘德华')
    }
  }
}

namespace bajie{
  export class Dehua{
    public name:string = '马德华'
    talk(){
        console.log('我是二师兄马德华啊')
    }
  }
}

let dehua1:shuaiGe.Dehua = new shuaiGe.Dehua()
let dehua2:bajie.Dehua = new bajie.Dehua()

dehua1.talk()
dehua2.talk()