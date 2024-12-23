//一切皆对象
// [] string function (广义的对象/特殊的对象)
// {} 纯对象
// 对象具备属性 具备方法
// 可以对对象进行赋值 方法可以赋值（方法的改写）
// call
// apply
// bind

var a=1;
var b=1;
console.log(a===b);//true

var c=[];
var d=[];
var e=c;
console.log(c===d);
console.log(e===c);
console.log('------')
var f= "fff";
var g= "fff";

console.log(f===g)

//类数组转数组
var nodeListOf = document.querySelectorAll("div");
[].slice.call(nodeListOf,0)

// 函数借调的时候 参数的传递
var a5 =[1,2];
var a6 =[3,4];

function sum(ratio) {
    return Math.pow(this[0]+this[1],2);
}

console.log(sum.call(a5, 2));

// js中所有数据都具备一个方法 toString 但是只有纯对象的toString才能正确的返回不同数据的数据类型

var chun={};
console.log(chun.toString.call(a5));


function typeReBack(a) {
    return {}.toString.call(a).slice(8,-1).toLowerCase()
}

























