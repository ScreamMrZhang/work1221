// bind保存this指向 但是不会立即调用
var button =document.querySelector('button');

var msg="hello world";
function callback() {
    console.log(this.msg===msg);
}
button.addEventListener('click', callback.bind(window));



//什么情况下使用bind？
//当默认的this指向不满足要求 但是希望在改变this指向的同时 不立即执行函数。

//什么情况下使用call？
//当默认的this指向不满足要求 但是希望在改变this指向的同时 立即执行函数，且参数个数有限 参数不需要以数组的形式组织。

//什么情况下使用apply？
//当默认的this指向不满足要求 但是希望在改变this指向的同时 立即执行函数，且参数个数无限个 参数需要以数组的形式组织。


