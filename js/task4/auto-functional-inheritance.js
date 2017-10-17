function car(model, issueYear, price) {
    this.model = model;
    this.issueYear = issueYear;
    this.price = price;
    this.wheels = 4;
    this.sound = function () {
        console.log('beep-beep')
    }
};


function jeepCar(model, issueYear, price) {
    car.call(this, model, issueYear, price);
    this.doors = 5;
    this.go = function () {
        console.log(this.model, 'goes anywhere')
    };
}

function sedanCar(model, issueYear, price) {
    car.call(this, model, issueYear, price);
    this.doors = 4;
    this.go = function () {
        console.log(this.model, 'goes on the wide road')
    };
}

function coupeCar(model, issueYear, price) {
    car.call(this, model, issueYear, price);
    this.doors = 2;
    this.go = function () {
        console.log(this.model, 'goes on narrow streets')
    };
}

var jeepCherokee = new jeepCar('Cherokee', 2015, '40000 BYN');
var sedanMazda6 = new sedanCar('Mazda6', 2012, '35000 BYN');
var coupeMX5 = new coupeCar('MX5', 1985, '40000 BYN');

console.log(jeepCherokee);
jeepCherokee.sound();
jeepCherokee.go();

console.log(sedanMazda6);
sedanMazda6.sound();
sedanMazda6.go();

console.log(coupeMX5);
coupeMX5.sound();
coupeMX5.go();