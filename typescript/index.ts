declare var $;
$(function(){

});
window.onload=function(){

}

var a:number;
a = 123;

enum GENDER{
	MALE,
	FEMALE	
}

var sex:GENDER;
sex = GENDER.MALE;

var b:any;
b=12;
b='abc';

var c:number = 99;

enum WEEK {
	SUN,
	MON,
	TUE,
	WED
}
var w;
switch(w){
	case WEEK.SUN:
		break;
	case WEEK.MON:
		break;
	case WEEK.TUE:
		break;
	case WEEK.WED:
		break;
}

var d:number|string;
d = 9;
d = 'asd';
var dd:boolean;
d=dd?3:'d';

var arr:number[] = [12,5,8];
var arr1 = [12,'ad',false];
arr1.push(66);

function show(a:number,b:number){
	console.log(a+b);
}
show(1,2);

function ajax(url:string,success:(res:string, code:number)=>void,error:(code:number)=>void){
	; 
}

var point:{x:number,y:number,z?:number};
point = {x:1,y:2,z:8};

interface Point{
	x:number,
	y:number,
	z?:number
}
var p:Point;
p={x:12,y:9,z:99};

class Person {
	name:string;
	age:number;

	constructor(name:string,age:number){
		this.name = name;
		this.age = age;
	}

	showMe(){
		console.log('我的名字叫：'+this.name+'，我的年龄是：'+this.age);
	}
}
var per = new Person('sam',28);
per.showMe();


class Student {
	public name:string;
	private age:number;
} 
var stu = new Student(); 
stu.name = 'sam';


class Calc<T>{
	a:T;
	b:T;
}
// var obj = new Calc();
// obj.a = 12;
// obj.b = 'abc';

var obj = new Calc<number>();
obj.a = 12;
obj.b = 34;

class Calc2<T>{
	a:T;
	b:T;

	constructor(a:T,b:T){
		this.a = a;
		this.b = b;
	}

	show(c:T){
		console.log(this.a);
		console.log(this.b);
		console.log(c);	
	}
}
var obj2 = new Calc2<number>(12,5);
obj2.show(10);


var arra:number[] = [1,2];

// 数组泛型完整的写法
var arrb:Array<number> = new Array<number>();