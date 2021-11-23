"use strict";
/**
 * penggunaan defaul parameter bisa digunakan
 * untuk menghindari yang nama nya null
 */
/**
 * tampa default parameter
 */
const tampaDefaultParameter = (firtsName, lastName) => {
    return firtsName + " " + lastName;
};
console.log(tampaDefaultParameter("Lintang", "Js"));
const defaultParameter = (name, age = 19) => {
    return name + " " + age;
};
console.log(defaultParameter("Lintang"));
