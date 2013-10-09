function makeLooper(str) {
    // TODO: return a function that loops through 'str' on successive invocations
    var n=0;
    return function(s){
       
        if(n===str.length){
            n=0;
        }
        return str.charAt(n++);
        
    }}

var abc = makeLooper('abc');
alert(abc()); // should return 'a' on this first call
alert(abc()); // should return 'b' on this second call
alert(abc()); // should return 'c' on this third call
alert(abc()); // should return 'a' again on this fourth call