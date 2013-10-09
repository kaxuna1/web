var compose = function(val) {
  var val1=val;
  for(var i=1;i<arguments.length;i++){
    var call=arguments[i];
    val1=call(val1);
  }
  return val1;
};

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11
//ფუნქციას გადაეცემა განუსაზღვრელი რაოდენობის ფუნქციები და 1 რიცხვი
//ამ რიცხვით გამოიძახებს ყველა სხვა ფუნქციას და უკან აბრუნებს ყველა ფუნქციის
//გამოძახების შემდეგ მიღებულ მნიშვნელობას