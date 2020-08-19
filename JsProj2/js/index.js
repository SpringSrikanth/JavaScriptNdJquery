var name="srikanth";
var age=22;
var sal=0.0;
var isValid= true

console.log(name);
console.log(age);
console.log(sal);
console.log(isValid);


var colors;
console.log(colors);
// console.log(marks);

/*type of variable const,let,var
        const-meant for constant variable it can't be change means static
        
        let-meant for local variable  to given scope it will not use in another function
        var - global variable used for everwhere and we can modify any place 


        imp::
         *if any error occurs in javascript code the next line onwords not executed
         *if you declared the variable and not assigning the value then you will get output like undefined
         *if you assign the varibale value as null if console that the value is null .null is used for future utilization 
         */

var fname="ravi";
fname=24;
fname=true;
fname=undefined

console.log(fname);

console.log(typeof name);
console.log(typeof age);
console.log(typeof sal);
console.log(typeof isValid);

sal="20k";

console.log(typeof sal)
var ac= null;
console.log(ac);

/*
types of datatypes in javascript
number
string
null
boolean
array
object
undefined
*/

const a=10;
//a=20; you will get error like index.js:59 Uncaught TypeError Assignment to constant variable.
//    at index.js:59
console.log(a);


let b="hello";//we can change variable by using let because let is not a const variable but it will be available inside scope only.
b=20;
console.log(b);