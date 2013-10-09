function getEvenNumbers(numbersArray){
    //ამ ფუნქციას გადაეცემა ყოველი ელემენტი გასაფილტრი
    //მასივიდან სანამ ის დაემატება გაფილტრულ მასივში
    //ფუნქცია შესამოწმებელ მნიშვნელობას ღებულობს
    //არგუმენტსი სახით რომელსაც ამოწმებს ნებისმიერი სასურველი
    //წესით და უკან true-ს დაბრუნების შემთხვევაში ამატებს ახალ მასივს
    //ამ ელემენტს.
  function kk(element) {
    function isOdd(num) { return num % 2;}
  return !isOdd(element);
}
var filtered = numbersArray.filter(kk);
return filtered;
}