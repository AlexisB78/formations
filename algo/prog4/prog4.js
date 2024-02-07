// Variable
var readline =  require("readline-sync");
var mois = parseInt(readline.question("Mois : "));

while (!(mois>=1 && mois<=12)){
    console.log("Mois inconnu");
    var mois = readline.question("Mois : ");
} 

switch (mois){
    case 1 : console.log("Janvier");
    break;
    default : console.log("lol");
}
