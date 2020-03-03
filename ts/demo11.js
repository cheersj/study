"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('小哥哥好');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('范冰冰', 18);
console.log(jiejie);
jiejie.say();
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', '热巴', 22);
console.log(jiejie2.sex);
// console.log(jiejie2.name);
// console.log(jiejie2.age);
jiejie2.sayHello();
// jiejie2.sayLove()
// 只读属性修饰符
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex = 'nv';
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    JsShuai.prototype.zhuangQian = function () {
        console.log('一天赚了一个亿');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai("技术帅", 5, '演讲');
shuai.interest();
shuai.zhuangQian();
