// Date
// to check the present Date

// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// to get or put specefix date

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2002-04-26")

let myCreatedDate = new Date("04-26-2002")
// console.log(myCreatedDate.toLocaleString());



// ******** TimeStamp *********

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{

    weekday:"long",
})
console.log(newDate);
