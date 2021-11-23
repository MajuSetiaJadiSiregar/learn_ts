export class User {

   public name:string;

   constructor(name:string, public age:number){
      this.name = name;
   }
}

let userOne = new User("Lintang", 19);
console.log(userOne);