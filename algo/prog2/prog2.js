//Variables
var readline = require("readline-sync");
var chiffre1 = readline.question("Saisir un chiffre : ");
var chiffre2 = readline.question("Saisir un chiffre : ");
var res = chiffre1 - chiffre2;

console.log("Résultat : " + res);