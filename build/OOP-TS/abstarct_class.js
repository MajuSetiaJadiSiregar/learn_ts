"use strict";
class Vehicle {
    start() {
        console.log('bruum');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
    mati() {
        return ("Method not implemented.");
    }
}
let car = new Car();
car.start();
console.log(car.mati());
