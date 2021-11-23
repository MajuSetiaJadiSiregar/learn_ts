"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.User = User;
let userOne = new User("Lintang", 19);
console.log(userOne);
