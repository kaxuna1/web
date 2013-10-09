// complete the function
// complete the function
//ჩემი ამოხსნა...
function solution(string) {
    var s=string.split(/\B([A-Z])/g);
    var str="";
    for(var i=0;i<s.length;i++)
    {
        str+=s[i];
        if(s[i].length!==1&&i!==s.length-1){
            str+=" ";
        }
    }
    return str;
}
solution('camelCasing'); //should return 'camel Casing'
//სხვა ვარიანტი
function solution(string) {
    return string.replace( /([A-Z])/g , " $1");
}
