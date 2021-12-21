// Write your solution here!

const cats=["Milo", "Otis", "Garfield"];


    function destructivelyAppendCat(name){
    cats.splice(3,0,name);

    }
    //destructivelyAppendCat('Ralph');


    function destructivelyPrependCat(name){
    cats.unshift(name);
    
    }
    //destructivelyPrependCat('Bob');

    function destructivelyRemoveLastCat(){
    cats.pop();
   
    }
    function destructivelyRemoveFirstCat(){
    cats.shift()

    }

    function appendCat(name){
    const newCats=[...cats,name];
    return newCats;
    
    }
    //appendCat('Broome');
   
    function prependCat(name){
        const fstCat=[name, ...cats];
        return fstCat;
    }
    //prependCat('Arnold')
    
  function removeLastCat(){
      const lstCat=[...cats.slice(0,cats.length -1)];
      console.log(lstCat);
      return lstCat;
  }
  
  function removeFirstCat(){
      const removeFirst=[...cats.slice(1)];
      return removeFirst;
  }