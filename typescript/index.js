$(function () {
});
window.onload = function () {
};
var a;
a = 123;
var GENDER;
(function (GENDER) {
    GENDER[GENDER["MALE"] = 0] = "MALE";
    GENDER[GENDER["FEMALE"] = 1] = "FEMALE";
})(GENDER || (GENDER = {}));
var sex;
sex = GENDER.MALE;
var b;
b = 12;
b = 'abc';
var c = 99;
var WEEK;
(function (WEEK) {
    WEEK[WEEK["SUN"] = 0] = "SUN";
    WEEK[WEEK["MON"] = 1] = "MON";
    WEEK[WEEK["TUE"] = 2] = "TUE";
    WEEK[WEEK["WED"] = 3] = "WED";
})(WEEK || (WEEK = {}));
var w;
switch (w) {
    case WEEK.SUN:
        break;
    case WEEK.MON:
        break;
    case WEEK.TUE:
        break;
    case WEEK.WED:
        break;
}
var d;
d = 9;
d = 'asd';
var dd;
d = dd ? 3 : 'd';
var arr = [12, 5, 8];
var arr1 = [12, 'ad', false];
arr1.push(66);
function show(a, b) {
    console.log(a + b);
}
show(1, 2);
function ajax(url, success, error) {
    ;
}
var point;
point = { x: 1, y: 2, z: 8 };
var p;
p = { x: 12, y: 9, z: 99 };
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        console.log('我的名字叫：' + this.name + '，我的年龄是：' + this.age);
    };
    return Person;
}());
var per = new Person('sam', 28);
per.showMe();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.name = 'sam';
var Calc = /** @class */ (function () {
    function Calc() {
    }
    return Calc;
}());
// var obj = new Calc();
// obj.a = 12;
// obj.b = 'abc';
var obj = new Calc();
obj.a = 12;
obj.b = 34;
var Calc2 = /** @class */ (function () {
    function Calc2(a, b) {
        this.a = a;
        this.b = b;
    }
    Calc2.prototype.show = function (c) {
        console.log(this.a);
        console.log(this.b);
        console.log(c);
    };
    return Calc2;
}());
var obj2 = new Calc2(12, 5);
obj2.show(10);
var arra = [1, 2];
// 数组泛型完整的写法
var arrb = new Array();
