import readline from "readline-sync";
let totBeginAction = parseFloat(readline.question("Avenir Action : "));
let totBeginMixte = parseFloat(readline.question("Avenir Mixte : "));
let totInvest = parseFloat(readline.question("Montant a investir : "));

let res = invest(totBeginAction, totBeginMixte, totInvest)
console.log("Action : ", res.totEndAction.toFixed(2), " Mixte : ", res.totEndMixte.toFixed(2))

function invest(a, b, c) {
    let total = a + b + c
    let totEndAction = (total / 2) - a
    let totEndMixte = (total / 2) - b
    return { totEndAction, totEndMixte }
}

