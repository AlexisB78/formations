// let a = 3;
// let b = a;

// a = a+2;

// console.log("a = ", a);
// console.log("b = ", b);

// const c = [1,2,3];
// const d = c;
// console.log("c = ", c);
// c[3] = 4;

// console.log("c = ", c);
// console.log("d = ", d);

const obj = {};
// const tab = [];
// console.log(obj);
// const func = function(){};
// On réaffecte la constante => on déclenche une erreur
obj.blabla = 1;
obj.blublu = 2;
console.log(obj);
console.log(obj.blabla);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj["blabla"]);
console.log(obj.blublu);