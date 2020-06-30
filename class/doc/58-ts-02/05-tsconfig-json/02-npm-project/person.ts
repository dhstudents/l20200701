export class Person {
//class Person {
    firstName: string;
    lastName: string;
    constructor(fname: string , lname : string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getFullname() { 
        return this.firstName + " --- " + this.lastName;
    }
}
