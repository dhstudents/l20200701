// interfaces and implementation
interface Entity {
    firstName: string;
    lastName: string;
    getFullName() : string; // signiture
}

class Employee implements Entity {
    firstName: string;   
    lastName: string;
    getFullName(): string {
        //throw new Error("Method not implemented.");
        return "Employee: " + this.lastName + " " + this.firstName;
    }
}

var emp = new Employee();
emp.getFullName();

class Customer implements Entity {
    firstName: string;    lastName: string;
    getFullName(): string {
        //throw new Error("Method not implemented.");
        return "Customer: " + this.lastName + " " + this.firstName;
    }
}
var cust = new Customer();
cust.getFullName();

