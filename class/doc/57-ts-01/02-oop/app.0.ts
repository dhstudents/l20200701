// 1 ----------------------------------------
// class definition
class Person1  {

}
// create object
var o1 = new Person1();

// 2 ----------------------------------------

class Person2  {
    firstName;
    lastName;
}
var o2 = new Person2();  // inferring
o2.firstName = "Jhon";
o2.lastName = "Bryce"
console.log(o2.lastName);

//var o2a : Person2 = new Date()
var o2a : Person2 = new Person2(); // explicit

// 3 ----------------------------------------
// add type anotation to properties
class Person3  {
    firstName : string;
    lastName : string;
}

// 4 ----------------------------------------
// methods
class Person4  {
    firstName : string;
    lastName : string;
    getFullName() {
        return this.firstName + " " + this.lastName // have to use this
    }
}

var p4 = new Person4();
p4.getFullName();


// 4 ----------------------------------------
// adding constractor
class Person5  {
    firstName : string;
    lastName : string;
    
    constructor(fname: string , lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName() {
        return this.firstName + " " + this.lastName // have to use this
    }
}

var p5 : Person5 = new Person5("Jhon", "Bryce");
p4.getFullName();
