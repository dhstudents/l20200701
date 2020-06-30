// Arrow function
var fn = () => 'response'; 
console.log(fn());


// Types
// explicit
var a: number;
var b: string;
var c: boolean;
var u: undefined;
var n: null;
var s: Symbol;
var v: any;

var f1: () => void
var f2: (id: number) => boolean;

// array
var arr : number[]; // array declaration
arr = [];
arr[0] = 12;
arr.push(100);
a = arr.pop();
b = arr.pop();  // !!!!!!!!!

arr[1] = "Danny"; // !!!!!!!!

//
var arr1 = [1, "a" ,true ] // in js ok in ts ng

var tupple: [number , string]; // create tupple


// inffering (implicit)
var i = 10 // understand that this is a number
// but
var j;
j = 10; // understand that this is any!!!!!!!!!

// Duck
var o = {id: 10 , name: 'Danny'};
