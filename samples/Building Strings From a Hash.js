function solution(pairs){
    var str="";
    var strVar="";
  for(var key in pairs){
      strVar=key+" = "+pairs[key]+",";
      str+=strVar;
     
      
  }
    str=str.substring(0,str.length-1);
    return str;
}



solution({a: 1, b: '2'}); // should return "a = 1,b = 2"