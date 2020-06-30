// public private
// class Person10  {
//     firstName;  public by default
//     lastName;   public by default
// }

class Person10  {
    private firstName: string;
    private lastName: string;
}
//--------------------------------------------------------
class Person11  {
    public firstName: string;
    public lastName: string;
}

//--------------------------------------------------------
class Person12  {
    private firstName: string;
    private lastName: string;
    // reveal the first name make it read only!!!!
    getFirstName() {  // public by default
        return this.firstName;
    }
}
//--------------------------------------------------------
class Person13  {
    private firstName: string;
    private lastName: string;

    // encapsulate the internal value 
    // expost it through the get/set methods
    public getFirstName() {  
        return this.firstName;
    }
    public setFirstName(fname: string) {
        this.firstName = fname;
    }
}
//--------------------------------------------------------