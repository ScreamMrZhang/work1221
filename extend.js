/*
function MySet() {
    var length=0;
    var items={};

    function Set() {

    }
    Set.prototype = {
        add:function(item){
            var isRepeat=false;
            for (let i = 0; i < item.length; i++) {
                if (item===this[i]) {
                    isRepeat=true;
                    break;
                }
                if (!isRepeat){
                    this[this.length]=item;
                    this.length++;
                }
            }
            this[this.length]=item;
        },
        size:function(){
            return length;
        },
        key:function(){

        }
    }
}

MySet.prototype = {
    constructor:MySet,

}

var s1 =new MySet();
s1.add(2);



 */

// 类的继承
// 类 与 类之间
// 子类 继承 父类

// function inherit() {}

function Phone(brand,width,height,weight) {
    this.brand=brand;
    this.width=width;
    this.height=height;
    this.weight=weight;
}
Phone.prototype={
    boot:function () {

    },
    shutdown: function () {

    },
    call : function () {

    },
    sendMsg : function () {

    },
}
function HuaweiPhonePro(width,height,weight) {
    Phone.call(this,"huawei",width,height,weight);
    this.os="harmony os"
}
HuaweiPhonePro.prototype={
    sendSatelliteMsg : function () {}
}
function inherit(Sup, Sub) {
    // HuaweiPhonePro.prototype.__proto__=Phone.prototype;
    // 把父类的原型对象 赋值给 子类的原型对象的原型
    Sub.prototype.__proto__=Sup.prototype;
}
// HuaweiPhonePro.prototype.prototype=Phone.prototype;

console.log(new HuaweiPhonePro());

function Animal(name,age) {
    this.name = name;
    this.age = age;
}
Animal.prototype={
    eat:function () {
        console.log("吃东西");
    }
}

function Dog(name,age) {
    Animal.call(this,name,age);
    this.legs=4;
}
inherit(Animal,Dog);
var dog = new Dog("大黄",18);
console.log(dog);


function Fish(name,age) {
    Animal.call(this,name,age);

}
Fish.prototype={
    swim:function () {
        console.log("生活在水中")
    }
}
inherit(Animal,Fish);
