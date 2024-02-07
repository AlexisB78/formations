let readline = require("readline-sync");
let chiffre;

do {
    chiffre = readline.questionInt("Chiffre : ");
    if (chiffre<10){
        console.log("Trop petit");
    } else if (chiffre>20){
        console.log("Trop grand");
    }
}
while (chiffre<10 || chiffre>20);