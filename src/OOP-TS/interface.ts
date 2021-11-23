interface Laptop {
   name:string;
   On():string;
   Off():string;
}

class Asus implements Laptop {
   name: string = "Asus";
   On(): string {
      return "Method On not implemented.";
   }
   Off(): string {
      return "Method Off not implemented.";
   }
   
}

let asus = new Asus();
console.log(asus.name);