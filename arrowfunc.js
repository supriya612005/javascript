// Function with no arguments and no return type
var fn = () =>{
    s='a'
    if(s=='a'){
      console.log("Char matches");
  }
  else{
        console.log("Char doesn't matches");

    }
}
fn();

// Function with argument and with return type

var pop = (s) =>{
    
    if(s=='a'){
      return true;
  }
  else{
       return false;

    }
}
console.log(pop('b'));

// Function with no argument and with return type

var fn = () =>{
      s='a'
      if(s=='a'){
        return true;
    }
    else{
          return false;

      }
}
console.log(fn());

// Function with argument and without return type

var fn = (s) =>{
    
    if(s=='a'){
      console.log("Char matches");
  }
  else{
        console.log("Char doesn't matches");

    }
}
fn('a');