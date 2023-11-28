const name = "Zeeshan"
const repocount = 50

console.log(name + repocount + " Value");
// This old way to concat the String

console.log(`This is ${name} my Repo Count is ${repocount}`);

// This is new way to add/concat the string
// another way to declare the String
const gameName = new String ('MyName.Gaming.google.com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('5'));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
// console.log((newString));

const anotherString = gameName.slice(4, -6)
console.log(anotherString);

const newStringone = "    Zeeshan   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://zeeshan.com/zeeshan%20patel"
console.log(url.replace('%20', '@')) 

console.log(url.includes('zeeshan'))  

// who to change the String in to array based on what you have opearter by using split

console.log(gameName.split('.'));