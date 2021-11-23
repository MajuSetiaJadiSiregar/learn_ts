/**
 * function sama kek js lah
 * cuma kita mesti kasi type checking aja sih
 */

function getName(): number{
   return 2;
}
console.log(getName());

function tampaReturn():void{
   console.log('No return');
}

tampaReturn();

/**
 * function sebagai tipe data
 */

type Age = number;
let age:Age = 123;


type tambah = (valOne: number, valTwo: number) => number;
const Add:tambah = (valOne:number, valTwo:number) => {
   return valOne + valTwo;
}

