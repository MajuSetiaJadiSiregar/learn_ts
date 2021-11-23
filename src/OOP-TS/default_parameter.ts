/**
 * penggunaan defaul parameter bisa digunakan 
 * untuk menghindari yang nama nya null
 */

/**
 * tampa default parameter
 */
const tampaDefaultParameter = (firtsName:string, lastName:string):string => {
   return firtsName + " " + lastName;
}

console.log(tampaDefaultParameter("Lintang", "Js"));

const defaultParameter = (name:string, age:number = 19):string => {
   return name + " " + age;
}

console.log(defaultParameter("Lintang"));