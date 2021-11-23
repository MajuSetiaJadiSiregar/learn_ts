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
   public phone:string;
   private _email:string = "";

   /**
    * static biasa
    */
   static ip_address:string = 'ip_address';
   /**
    * static metod
    */

   static sayHello():string {
      return 'hai...';
   }

   

   constructor(phone:string, name:string, age:number){
      super(name, age);
      this.phone = phone;
   }

   GetRole():{read:boolean, write:boolean}{
      return {
         read : this.read,
         write : this.write
      };
   };

   set email(valueEmail:string){
      this._email = valueEmail;
   }

   get email():string {
      return this._email;
   }
}

let adminOne = new Admin("0212015", "Lintang Js", 23);
adminOne.setName('Indonesia');
adminOne.email = 'indonesia@gmail.com';
console.log(adminOne.email);
console.log(Admin.ip_address);
console.log(Admin.sayHello());