/*
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long. 
'i' will increment the value ( initially 0 ).
'd' will decrement the value.
's' will square the value.
'o' will output the value into the return array.
Invalid characters should be ignored.
*/
// Return the output array, and ignore all non-op characters
function parse( data )
{
    var mas=[];
  value=0;
  for(var i=0;i<data.length;i++){
    switch(data.charAt(i)){
            case "i":
            value++;
            break;
            case "s":
            value=value*value;
            break;
            case "o":
            mas.push(value);
            break;
            case "d":
            value--;
            break;
            default:
            break;
    }
  }
    return mas;
}

parse( "iiisdoso" ); // should == [ 8 , 64 ]