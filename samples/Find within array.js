var findInArray = function(array, iterator) {
  for(var i=0,len=array.length;i<len;i++){
    if(iterator(array[i],i)) return i;  
  }
  return -1;
};

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3