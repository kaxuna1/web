/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:
*/
/*
rot13 არის მარტივი ასოების ჩანაცვლების შიფრი
ალგორითმი ყოველ ასოს ანაცვლებს ასოთი რომელიც არის ცამეტი ასოს შემდეგ.
str.charAt();აბრუნებს სთრინგის სიმბოლოს იმ ინდექსზე;
var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var b="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
სთრინგები რომლებშიც არის ნაჩვენები თუ რომელი ასო რომლით ჩანაცვლდება
*/


function rot13(str) {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var b = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    var str13 = "";
    for (var i = 0; i < str.length; i++) {
        if (b.charAt(a.indexOf(str.charAt(i)))!=="") {
            str13 += b.charAt(a.indexOf(str.charAt(i)));
        }else{
            str13+=str.charAt(i);
        }
    }
    return str13;
}

Test.expect(rot13("EBG13 rknzcyr.") == "ROT13 example.");
Test.expect(rot13("This is my first ROT13 excercise!") == "Guvf vf zl svefg EBG13 rkprepvfr!")