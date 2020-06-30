import { Person } from "./person";

class Admin extends Person {
    
}

class Manager extends Person {

}

let admin = new Admin("ad", "min");
let manager = new Manager("mana" , "ger");
// output ??????? there is no output!!!!!!!!!
// so where is the output from "Jhon Bryce"


////console.log(admin.getFullname(), manager.getFullname())