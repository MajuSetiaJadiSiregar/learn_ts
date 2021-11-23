/**
 * optional parameter itu konsep nya
 * cuma parameter nya mau dikasi apa tidak
 * nah kalau parameter nya gak di kasi, maka
 * value nya menjadi undifined
 */




const optionalParameter = (name:string, age?:number):string => {
   return name + ' ' + age;
}

console.log(optionalParameter('Lintang', 23));