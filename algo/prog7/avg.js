function avg(nb1, nb2, nb3){
    let result=(nb1+nb2+nb3)/3;
    return(result);
} 

let readline = require("readline-sync");
let nb1 = readline.questionInt("Chiffre 1 : ");
let nb2 = readline.questionInt("Chiffre 2 : ");
let nb3 = readline.questionInt("Chiffre 3 : ");
console.log("Moyenne de :" + avg(nb1, nb2, nb3));