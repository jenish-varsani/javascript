// Primitive

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456687684641694654n

// Reference (Non primitive)

// Array,Object,Function

const heros = ["A", "B", "C", "D", "E"];

let myobj = {
    name:"jenish",
    Age:"21",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction)