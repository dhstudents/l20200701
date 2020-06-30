//---------------------------------------------------
// inheritance
class PersonBase {
    firstName: string;
    lasttName: string;
    greet() {
        console.log("Hello Base");
    }
}

class Programmer1 extends PersonBase {

}

var prog =  new Programmer1();
prog.greet();

//---------------------------------------------------
class Programmer2 extends PersonBase {
    
    greet() {
        console.log("Hello World");
    }
    
    greetPerson() {
        this.greet();
        super.greet(); // call the parent class method
        // call super() to call parent contractor
    }
}

var prog2 =  new Programmer2();
prog2.greet(); // hello world!!.

//---------------------------------------------------

var prog3 : PersonBase = new Programmer2();
prog3.greet() // call PersonBase greet 