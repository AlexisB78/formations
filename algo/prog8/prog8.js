let tab=[];
let res=0;

for (let i=0; i <= 3; i++){
    tab[i] = Math.round(Math.random()*20);
    let j = tab[i];
    res = res + j;
    let pos = i + 1;
    console.log("Mon " + pos + " nombre aléatoire est :" + j);
    console.log("Mon total est de :" + res);
}
res = res/tab.length;
console.log("Ma moyenne est de : " + res);