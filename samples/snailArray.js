function snail(array) {
    var mas = [];
    var right = true;
    var down = false;
    var left = false;
    var upp = false;
    for (var i = 0; i <= (array.length * 2)-2; i++) {
        if(right){ 
            while(array[0].length>0){
                mas.push(array[0].shift());
            } 
            array.shift();
            right=false;
            down=true;
            
            array.shift(); 
            continue; 
        }
        if(down){
            for(var d=0;d<array.length;d++){
                mas.push(array[d].pop());
            }
            down=false;
            left=true; 
            continue;
        }
        if(left){
            for(var l=0;l<array[array.length-1].length;l++){
                mas.push(array[array.length-1].pop());
            }  
            mas.push(array[array.length-1].pop());
          
            left=false;
           
           
          if(array.length==1)
            upp=true;
          else
            right=true;
           
           
          
            continue;
          
        }
        if(upp){  
            for(var u=0;u<array.length;u++){
                mas.push(array[u].shift());
            }
            upp=false;
            right=true;
            continue;
        }

    }
    return mas;

};

array = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9] 
];
alert(snail(array));