const accountId = 8956
let accountEmail = "zeeshan@gmail.com"
var accountPassowrd = "12345"
accountCity = "Solapur"
let accountState;

// accountId = 5623 // cont not Allowed to Change
accountEmail = "zeeshan89@gmail.com"
accountPassowrd = "11558899"
accountCity = "Hyderabad"



/*
prefer not to use var
beacuse of issue in block Scope and Fuctional Scope.
*/
console.log(accountEmail);
console.log(accountId);
console.table([accountEmail, accountPassowrd, accountCity, accountState])
