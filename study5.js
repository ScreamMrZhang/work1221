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


