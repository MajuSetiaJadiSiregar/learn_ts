export class User {
   name:string;

   constructor(name:string, public age:number){
      this.name = name;
   }

   setName(valueName:string):void{
      this.name = valueName;
   }

   getName = ():string => {
      return this.name;
   }
}

class Admin extends User {
   
   public read:boolean = true;
   public write:boolean = true;

   GetRole():{read:boolean, write:boolean}{
      return {
         read : this.read,
         write : this.write
      };
   };
}

let adminOne = new Admin("Lintang", 23);
adminOne.setName('Indonesia');
console.log(adminOne.GetRole());