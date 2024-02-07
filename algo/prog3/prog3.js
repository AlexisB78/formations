// Variables
var readline = require("readline-sync");
var age = readline.questionInt("Entrez votre age : ");

// Actions

if(age<18) {
    console.log("Mineur");
} else {
    console.log("Majeur");
}
console.log(age);