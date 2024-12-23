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

//————————————————————————————--

function MyArray() {
    for (const key in arguments) {
        this[key] = arguments[key];
    }
    this.length=arguments.length;
}
MyArray.myPrototype={
    push:function (value) {
        this[this.length] = value;
        this.length++;
        return this.length;
    },
    pop:function () {
        var thisDelete = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return thisDelete;
    },
    shift:function () {
        var first = this[0];
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i+1];
        }
        this.pop();
        return first;
    },
    unshift:function () {
        var length = arguments.length;
        var newLength = this.length + length;
        // 从后往前复制
        for (let i = newLength-1; i >=0; i--) {
            // 小于传进来的就直接赋值参数
            if (i<length) {
                this[i]=arguments[i];
            }else {
                this[i]=this[(i-length)];
            }
        }
        this.length+=length;
        return this.length;
    },
    indexOf:function () {
        var length = arguments.length;
        var i=0;
        if (length === 2) {
            i=arguments[1];
        }
        for (i; i < this.length; i++) {
            if (arguments[0]===this[i]) {
                return i;
            }
        }
        return -1;
    },
    slice:function () {
        var res= createArray();
        var aLength = arguments.length;
        let i=arguments[0];
        var target = this.length;
        if (aLength === 2) {
            target = arguments[1];
        }
        for (i; i < target; i++) {
            res[i]=this[i];
        }
        res.length=target-arguments[0];
        return res;
    },
    join:function () {
        var res='';
        var joinStr = ',';
        if (arguments.length>0) {
            joinStr=arguments[0];
        }
        for (let i = 0; i < this.length; i++) {
            res=`${res}${joinStr}${this[i]}`;
        }
        return res.length>0 ? res.slice(1) : '';
    },
    concat:function (value) {
        var result = createArray();
        // 将当前数组（this）复制到结果数组中
        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }
        // 遍历所有参数
        if (value.push===this.push) {
            for (let i = 0; i <value.length ; i++) {
                if (value[i].push===this.push) {
                    result=result.concat(value[i]);
                }else{
                    result.push(value[i]);
                }
            }
        }else{
            result.push(value);
        }
        return result;
    },
};

var myArray = new MyArray(1,2,3,4,5,6);
console.log(myArray);

