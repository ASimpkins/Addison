var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

var n = prompt('how many more times');
var wallet = 1200;
var store =["sword","food"];
var prices = [500 , 100];
var inventory = [];
// [] are blank so people can add something in
while(wallet>0){
    var purchaseChoice = prompt("what're you buying");
if purchaseChoice == ("sword"){
    wallet = wallet - prices[0];
    console.log(wallet:)
    inventory.push("food");
    wallet = wallet - prices [1];
    console.log(wallet);


}

else if (purchaseChoice) == "quit"){
    //process.exit():
    wallet = 0;
}