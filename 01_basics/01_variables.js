const accountId = 144553
let accountEmail = "arya@google.com"
var accountPassword = "12345"
accountCity = "ahmedabad"
let accountState;

// accountId = 2 // not allowed
accountEmail = "ap@ap.com"
accountPassword = "923724981"
accountCity = "Banglore"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var
cuz of issue in block scope and functional scope.
*/