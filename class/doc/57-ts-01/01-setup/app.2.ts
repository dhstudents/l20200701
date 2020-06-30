// any type
var allTypes : any;

allTypes = 10;
allTypes = true;
allTypes = "ABC";


// union type
var v1: number | boolean;  // can be number or boolean
v1 = 10;
v1 = true;


// define new type
type bool_num = number | boolean;

var v10 : bool_num;
v10 = false;
v10 = 400;


// function type definition
type cb = (id: number) => boolean;
function doit(pa: number , ff : cb) : void {}
doit(1 , function(inp: number) { return inp === 100})