// Primitive Data type
// 7 types : String, Number, Boolean, Null, undefined, symbol,Bigint

const score = 1000
const scoreValue = 1000.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.table(id === anotherId)

const bigNumber = 89652324598562n


// non Primitive Datatypes(refernce)
// Array, Objects, Functions

const heros = ["IronMan", "CA", "Blackwido","Hulk"];

let myInfo = {
    name: "Zeeshan",
    age : 22,
}

 const myfun = function(){
    console.log("Hello Zeeshan");
 }

 console.log(typeof outsideTemp);

// *************************************************
 // Memory 2 types of 
 // Stack (Primitive), Heap(non Primitive)
 // Eg:

 let myDTVideo = "dataType-Summary"
 let Datatype = myDTVideo
   Datatype = "PrimitivedataType"
 
 //console.log(myDTVideo);
 //console.log(Datatype);

 let userOne = {
    email : "Zeeshan@gmail.com",
    upi : "8956299161@ybl"
 }

 let userTwo = userOne

 userTwo.email = "use@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
