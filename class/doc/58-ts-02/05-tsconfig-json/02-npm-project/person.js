"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    Person.prototype.getFullname = function () {
        return this.firstName + " --- " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
