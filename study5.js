// function Car(plate, name,type) {
//     this.plate = plate;
//     this.name = name;
//     this.type = type;
// }
// Car.prototype={
//     start:function () {
//         console.log(`${this.name}-${this.plate}`);
//     },
//     end:function (mileage) {
//         console.log(`${mileage * this.price}`);
//     }
// }
// function inherit(Sup,Sub) {
//     Sub.prototype.__proto__ = Sup.prototype;
// }
// function f() {
//
// }
//
// var fastCar = new Car("A23232","快车",1);
// fastCar.start();
// fastCar.end(5);
//
// var chauffeuredCar = new Car("A88888","专车",2);
// chauffeuredCar.start();
// chauffeuredCar.end(5);



function inherit(Sup,Sub) {
    Sub.prototype.__proto__ = Sup.prototype;
}
function Car(brand,number) {
    this.brand = brand;
    this.number = number;
}

function FastCar(brand,number) {
    Car.call(this,brand,number);
    this.price=1;
}

function ProfessionalCar(brand,number) {
    Car.call(this,brand,number);
    this.price=2;
}

function Trip(car,distance) {
    this.car=car;
    this.distance=distance;
}
Trip.prototype={
    start:function () {
        console.log(`${this.car.brand}-${this.car.number}`);
    },
    end:function () {
        console.log(this.car.price*this.distance);
    }
}

var fastCar = new FastCar("兰博基尼","京A88888");
var trip1 = new Trip(fastCar,10);
trip1.start();
trip1.end();

//________________________________
function Floor(name) {
    this.name=name;
    this.number=100;
}
Floor.prototype={
    show:function () {
        console.log(`${this.name}--剩余车位：${this.number}`);
    }
}
function Parking(stopCar,floor,name) {
    this.stopCar=stopCar;
    this.floor=floor;
    this.name=name;
    this.flag=false;
}
Parking.prototype={
    stopThisCar:function () {
        this.flag=true;
        this.floor.number--;
    },
    leaveCar:function (stopTime) {
        this.flag=false;
        this.stopCar.outTime=this.stopCar.inTime+stopTime;
        this.floor.number++;
    }
}
function StopCar(number) {
    this.number = number;
    this.inTime = undefined;
    this.outTime = undefined;
}

function Camera(name,car,floor) {
    this.name=name;
    this.car=car;
    this.floor=floor;
}
Camera.prototype={
    carInBefore:function () {
        this.floor.show();
    },
    carIn:function (inTime) {
        this.car.inTime=inTime;
        console.log(`车牌号：${this.car.number}-进场时间：${this.car.inTime}`);
    },
    carOut:function () {
        // this.car.outTime=outTime;
        console.log(`车牌号：${this.car.number}-停车时间：${this.car.outTime-this.car.inTime}`);
    }
}
var inTime = new Date().getTime();
var floorOne = new Floor("一层");
var stopCar1 = new StopCar("京A88888");
var camera = new Camera("入口摄像头",stopCar1,floorOne);
var parking = new Parking(stopCar1,floorOne,"一层-001");

camera.carInBefore();
camera.carIn(inTime);
parking.stopThisCar();
camera.carInBefore();
parking.leaveCar(3600000);
camera.carOut();




