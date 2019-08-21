"use strict";
function searchXiaoJieJie1(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result1 = searchXiaoJieJie1(22, '大长腿');
console.log(result1);
function searchXiaoJieJie2(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result2 = searchXiaoJieJie2();
console.log(result2);
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    console.log(xuqiu);
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = searchXiaoJieJie3('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
