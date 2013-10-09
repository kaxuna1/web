function uniq_c(a) {
    if(a.length!==0){
    try{
    var mas = [[a[0],0]];
    for (var key in a) {
        if(a[key]){
        if(a[key]!==mas[mas.length-1][0]){
           mas.push([a[key],1]);
            
        }else{
           mas[mas.length-1][1]++;
        }

    }}}catch(e){}
    return mas;
  
}else return[];};

var input = ['a', 'a', '', 'b', 'c', 'a', 'b', 'c'];
alert(uniq_c(input)); // -> returns [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]]