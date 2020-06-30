// constractors
class Car {
    brand: string;
    model: string;
    year: number;
    
    constructor(brand: string , model: string , year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
var prius = new Car("Toyota", "Prius", 2012);
var bmwz3 = new Car("BMW", "Z3", 2010);

//----------------- shortcut -----------------------------------
class Car1 {
    // make the parameters automaticly member variables
   // constructor(protected brand: string ,private model: string ,private year: number) {
   // constructor(public brand: string ,private model: string ,private year: number) {
    constructor(private brand: string ,private model: string ,private year: number) {
    }
}

//--------------------------------------------------------------
// readonly
class Test {
    // assign once!!!!!
    readonly name: string = "Koolooloo";  // or in constractor
    //constractor(readonly name: string) {}
}
var t = new Test();
t.name = "rrr";
