function solution(str){
    var mas=[];
    var str1="";
  while(str.length>0){
      if(str.length===1){
          str1=str.substring(0,1)+"_";
      }else{
          str1=str.substring(0,2);
      }
      mas.push(str1);
      str=str.substring(2);
      
  }
    return mas;
}




alert(solution('abc')) // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']