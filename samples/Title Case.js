
//ჩემი მეთოდი...
function titleCase(title, minorWords) {
    title = title.toLowerCase();
    var mas1 = title.split(/\W+/g);
    if (minorWords) {
        minorWords = minorWords.toLowerCase();
        var n = mas1[0].replace(mas1[0].charAt(0), mas1[0].charAt(0).toUpperCase());
                    mas1[0] = n;
        for (var i = 1; i < mas1.length; i++) {
        

                if (minorWords.indexOf(mas1[i])===-1) {
                    var n = mas1[i].replace(mas1[i].charAt(0), mas1[i].charAt(0).toUpperCase());
                    mas1[i] = n;
                }
            
        }
    } else {
        for (var i = 0; i < mas1.length; i++) {
            var n = mas1[i].replace(mas1[i].charAt(0), mas1[i].charAt(0).toUpperCase());
            mas1[i] = n;
        }
    }
    return mas1.join(" ");
}

//სხვა მეთოდი...    
function titleCase(title, minorWords) {
  var minors = (minorWords||"").toLowerCase().split(" ");
  return title.split(" ").map(function(val, index){
    val = val.toLowerCase();
    if(index>0 && minors.indexOf(val)>-1) return val;
    return val.charAt(0).toUpperCase() + val.substring(1);
  }).join(" ");
}
