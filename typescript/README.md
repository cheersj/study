# TypeScript
1. 1.编译
2. 2.强类型
3. 3.真正的面向对象：有接口，泛型，枚举，访问修饰符

# 准备工作
>## 1，下载
>>### npm install -g typescript 
>>### typescript插件 atom-typescript  

>## 2，编译ts程序
>>### tsc xxx.ts 
>>### *.ts  *.tsx  *.d.ts

number string boolean symbol void null undefined Enum any
1,number string boolean null undefined
2 void - 空  用于返回值
3 null undefined boolean-true,false null undefined都只有一种值null 
4 enum (枚举) -- enumerate 有限的可能性 性别 星期
5 any 变体变量 js 的var就是
6 根据初始化的值来推测类型  （隐式类型声明）
7 冲突检测  编译器会自动排除掉无用的选项
8 联合类型  number|string
9 数组也有类型

函数类型
1 参数    个数和类型要对应
2 返回值

外部变量声明 declare var 

类型
1 基本类型
2 联合类型 -- 选择
3 函数签名
    success:(a,b)=>void
4 复合类型：
    var a:{x:number,y:string}

接口 interface 跟java不同
约定，限制
汽车（接口）：开 停 锁 加油

class 真面向对象  extends 多继承

访问修饰符
public  private protected 

泛型---模板，宽泛，任何类型---不要和any搞混--传型


Array-----泛型

