// Duck typing
// this can play as Entity class
let obj01 = {
    firstName: "Jhon",
    lastName: "Bryce",
    getFullName: () => 'Hello'
}

emp = obj01;
//------------------------------------------------
let obj02 = {
    id: 100,
    firstName: "Jhon",
    lastName: "Bryce",
    getFullName: () => 'Hello'
}

emp = obj02;
emp.id // do not recognize id emp is Employee!!!!
