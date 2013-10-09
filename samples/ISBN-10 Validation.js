/*
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:
(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
*/
function validISBN10(isbn) {
        if(isbn===null||isbn===undefined||isbn.length<10){
        return false;
        }
     if (!isbn.match(/[0-9]{9}[0-9X]/)) return false;
    var res=0;
    var answ=false;
    var variable=0;
    for(var i=0;i<10;i++){
        variable=isbn.charAt(i);
        if(variable==="X"){
            variable=10;
        }else {variable=Number(variable);}
        variable=variable*(i+1);
        res+=variable;
    }
    if(res%11===0)answ=true;
    return answ;

}






validISBN10('048665088X') ===true;
validISBN10('1234554321') ===true;
validISBN10('1234512345') ===false;