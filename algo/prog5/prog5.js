// Variable
var readline = require("readline-sync");
var res = 1;
var saisi = readline.questionInt("Tape ton chiffre : ");
//console.log(saisi);

for (var i=1; i<=saisi; i++){
    res = res*i;
    console.log(res);
}