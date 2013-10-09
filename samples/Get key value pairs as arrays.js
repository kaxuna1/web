function keysAndValues(data){
  var aray1=[];
  var aray2=[];
    //key ცვლადი მიიღებს ობიექტში ყველა არსებული პარამეტრის სახელს
    //და შეასრულებს for-ში მოთავსებულ კოდს ყოველი მათგანისთვის
    //2 მასივში ჩაიწერება ობიექტის პარამეტრის სახელები
    //და მნიშვნელობები რომლებიც ამ პარამეტრებს ჰქონდათ
for (var key in data) {
  aray1.push(key);
  aray2.push(data[key]);
          }
return[aray1,aray2];
}