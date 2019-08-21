class XiaoJieJie{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  say(){
    console.log('小哥哥好');
  }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie);
jiejie.say();

class XiaoJieJie2{
  public sex:string;
  protected name:string;
  private age:number;
  public constructor(sex:string,name:string,age:number) {
    this.sex =sex;
    this.name= name;
    this.age = age;
  }
  public sayHello(){
    console.log('小哥哥好');
  }
  protected sayLove(){
    console.log('我爱你');
  }
}
var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

console.log(jiejie2.sex);
// console.log(jiejie2.name);
// console.log(jiejie2.age);
jiejie2.sayHello()
// jiejie2.sayLove()

// 只读属性修饰符
class  Man{
  public readonly sex:string = '男'
}
let man:Man = new Man();
// man.sex = 'nv';

class  Jspang{
  public name:string;
  public age:number;
  public skill:string;
  constructor(name:string,age:number,skill:string){
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  public interest(){
    console.log('找小姐姐')
  }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()

class JsShuai extends Jspang {
  public xingxiang:string = '帅气'
  public interest(){
    super.interest();
    console.log('建立电商平台');
  }
  public zhuangQian(){
    console.log('一天赚了一个亿');
  }
}

let shuai:JsShuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()