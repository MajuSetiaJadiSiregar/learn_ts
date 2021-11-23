"use strict";
/**
 * optional parameter itu konsep nya
 * cuma parameter nya mau dikasi apa tidak
 * nah kalau parameter nya gak di kasi, maka
 * value nya menjadi undifined
 */
const optionalParameter = (name, age) => {
    return name + ' ' + age;
};
console.log(optionalParameter('Lintang', 23));
