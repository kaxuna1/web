function interleave() {
  try{
    var mas = [];
    var mas1 = [];
    var mas2 = [];
    if(arguments!==null)
    var argSize = arguments.length;
    for (var key in arguments) {
        if(arguments[key].length!==null){
        mas1.push(arguments[key].length);}
    }
    var max = Math.max.apply(Math, mas1);
  for(var i=0;i<max;i++){
      for(var f in arguments){
          if(arguments[f][i]!==null){
          mas.push(arguments[f][i]);}
          else{mas.push(null);}
      }
       
  }}
  catch(e){}
    
   return mas;
}

alert(interleave([1, 2, 3], ['c', 'd'])); // should return [1, 'c', 2, 'd', 3, 'e']
