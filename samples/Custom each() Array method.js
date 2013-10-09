Array.prototype.each=function(callback){
    
    for(var i=0;i<this.length;i++){
        if(callback(this[i],i))break;
    }
    
}

var letters = ['a', 'b', 'c', 'd', 'e']
var allowedLetters = []
letters.each(function(letter, index){
  // break out of the loop if we reached a letter with the value 'd'
  if(letter == 'd') {
    return true;
  }
  allowedLetters.push(letter);   
})

// allowedLetters should equal ['a', 'b', 'c']
//გადავტვirTავთ მასივის each ფუნქციის პროტოტიპს, ახალი მეთოდი იტერაციას უკეტებს ელემენტებს
//მანამ სანამ მას უკან არ დაუბრუნებს true-ს ის ფუნქცია რომელიც მიიღო callbackისთვის;