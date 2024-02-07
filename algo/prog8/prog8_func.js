function avg(tab){
    let res=0;
    let tot=0;
    for (let i=0; i < tab.length; i++){
        let j = tab[i];
        tot = tot + j;
    }
res = (tot/tab.length).toFixed(2);
let datas = [tot, res];
return datas;
} 

let tab=[];
let readline = require("readline-sync");
let nb1 = readline.questionInt("Nombre de chiffres : ");

for (let i=0; i < nb1; i++){
    tab[i] = Math.round(Math.random()*20);
}
console.log(tab);
datas = avg(tab);
console.log("Total de : " + datas[0] + " et moyenne de : " + datas[1]);