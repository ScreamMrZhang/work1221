// 工厂函数，工厂模式


// 定义一个产生动物的工厂函数
(function (window) {
    var prototype={
        eat:function () {
            console.log("吃")
        }
    };
    function createAnimal(name,category) {
        var res ={}
        res.name=name;
        res.category=category;
        res.__proto__=prototype;
        return res;
    }
    window.createAnimal = createAnimal;

})(window)

//工厂函数的缺点
//1.模板代码太多
//2.产生的对象和产生该对象的函数关系不明

// 构造函数是对工厂函数的升级

// 构造函数的首字母大写
// 构造函数的使用（执行）必须使用new关键字
function Animal(name,category) {
    // var res ={}
    this.name=name;
    this.category=category;
    // this.__proto__=prototype;
    return this;
}
Animal.prototype={
    eat:function () {
        console.log("吃")
    }
};
// new关键字作用
// 1、在被new关键字修饰调用的函数中 自动定义一个res对象
// 2、this指向res空对象
// 3、自动绑定原型（将res的__proto__属性赋值为该函数的的prototype属性）
// 4、自动返回res
new Animal()