// function meaningOfLife () {
//     return 42;
//   }
  

try {
    const answer = meaningOfLife();
    setTimeout(() => {
        meaningOfLife()
    }, 50);
    console.log('valeur retournée par meaningOfLife():');
  } catch (err) {
    console.error("c'est faux", err);
  }

