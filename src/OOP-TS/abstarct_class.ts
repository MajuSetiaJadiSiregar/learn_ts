abstract class Vehicle {
   abstract wheels: number;
   start():void {
      console.log('bruum');
   }

   abstract mati():string;
}


class Car extends Vehicle {
   wheels: number = 4;

   mati(): string {
      return("Method not implemented.");
   }
}

let car = new Car();
car.start();
console.log(car.mati())