// apply也是方法的借调 和call只有一个区别
// 被借调的函数 传递参数时 传递方式不一样

var elements = document.querySelectorAll("div");
var arr1 = [].slice.call(elements,0);
var arr2 = [].slice.apply(elements,[0]);

var list =[2,232,13,23,2,312,31,23,12,312,3,12,312,3,123,1,432,423,423,44,2,34123,1];

var maxValue = Math.max.apply(list, list);
console.log(maxValue);