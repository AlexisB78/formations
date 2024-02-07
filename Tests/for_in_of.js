// let obj={
//     name : 10,
//     lastName : 20
// };

// let obj = [1,2,3,4];

// for (let key in obj ) {
//     console.log(key +" "+obj[key]);
//     }

// console.log(obj["lastName"]);

//let object = { a: 10, b: 20 };
let object = [10,20];
 
for (let [k, v] of Object.entries(object)) {
  console.log(k, v);
} 

// for (let [k, v] of object.entries()) {
//     console.log(k, v);
//   } 

console.log(object.map());