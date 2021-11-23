"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(valueName) {
        this.name = valueName;
    }
}
exports.User = User;
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    GetRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
}
let adminOne = new Admin("Lintang", 23);
adminOne.setName('Indonesia');
console.log(adminOne.GetRole());
