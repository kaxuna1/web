
speak.wrap=function(func){
    
    return function(a,b){
        return func(func,a,b);
    }
    
}


function speak(name){
   return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
})
alert(speak("Mary", "Kate"));