// arguments to function

// number of args has to match
// typs of atgs have to match
function add(a: number,b: number)  : number
{ 
    return a + b;
}

var sum: string;
sum = add(8,8); // type mismatch
var sum2 = add(2,2); // inffer
var sum3: number = add(10,10); // explicit


// optionals allways are last in the args list
function total(a: number , b: number , c?: number) : number {
    return a + b + c; // we have to check c!!!!
}

var t1 = total(1,2,3);
var t2 = total(1,2);
var t3 = total(1);
var t1 = total(1,2,3,4);


// default
// defaults allways are last in the args list
function vat(a: string = "a" ,sum: number , tax: number = 17) : number {
        return sum * tax / 100;
}

