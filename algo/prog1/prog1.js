//Variables
var chiffre1;
var chiffre2;
var res;

//init
chiffre1 = Math.round(Math.random()*20);
chiffre2 = Math.round(Math.random()*20);

if  (chiffre1==0)
{
    chiffre1=1000;
}

res = chiffre1 - chiffre2;

//action
console.log("Chiffre 1 :" + chiffre1);
console.log("Chiffre 2 :" + chiffre2);
console.log("Résultat :" + res);
