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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    /**
     * static metod
     */
    static sayHello() {
        return 'hai...';
    }
    GetRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(valueEmail) {
        this._email = valueEmail;
    }
    get email() {
        return this._email;
    }
}
/**
 * static biasa
 */
Admin.ip_address = 'ip_address';
let adminOne = new Admin("0212015", "Lintang Js", 23);
adminOne.setName('Indonesia');
adminOne.email = 'indonesia@gmail.com';
console.log(adminOne.email);
console.log(Admin.ip_address);
console.log(Admin.sayHello());
