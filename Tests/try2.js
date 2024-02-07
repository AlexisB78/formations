function meaningOfLife () {
   try{
    a;
   } catch{
    console.log("erreur dans la fonction");
   }
  }


try{
setTimeout(() => {
    meaningOfLife();
  }, 1000);
}catch (err) {
        console.log("won't work");
      }


//  try {
//         setTimeout(() => {
//           unknowfunction(); // le script mourra ici
//         }, 1000);
//       } catch (err) {
//         alert( "won't work" );
//       }