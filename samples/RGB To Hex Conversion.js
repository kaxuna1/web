//RGB რიცხვის 255,255,255 ის გადაყვანა ფერების hex 16 ობით რიცხვში
//ჩემი მეთოდი N1;

function rgb(r, g, b) {

    var R = r;
    if (R < 0) R = 0;
    if (R > 255) R = 255;
    var G = g;
    if (G < 0) G = 0;
    if (G > 255) G = 255;
    var B = b;
    if (B < 0) B = 0;
    if (B > 255) B = 255;
    var a = GiveHex(Math.floor(R / 16));
    var b = GiveHex(R % 16);
    var c = GiveHex(Math.floor(G / 16));
    var d = GiveHex(G % 16);
    var e = GiveHex(Math.floor(B / 16));
    var f = GiveHex(B % 16);

    var z = a + b + c + d + e + f;
    return z;


};

function GiveHex(Dec) {
    if (Dec == 10)
        Value = "A";
    else
    if (Dec == 11)
        Value = "B";
    else
    if (Dec == 12)
        Value = "C";
    else
    if (Dec == 13)
        Value = "D";
    else
    if (Dec == 14)
        Value = "E";
    else
    if (Dec == 15)
        Value = "F";
    else
        Value = "" + Dec;
    return Value;
};
//მეთოდი N2

function rgb(r, g, b) {
    // complete this function  
    r = Math.max(0, Math.min(255, r)).toString(16).toUpperCase();
    g = Math.max(0, Math.min(255, g)).toString(16).toUpperCase();
    b = Math.max(0, Math.min(255, b)).toString(16).toUpperCase();

    r = r.length > 1 ? r : 0 + r;
    g = g.length > 1 ? g : 0 + g;
    b = b.length > 1 ? b : 0 + b;

    return r + g + b;
}
//მეთოდი N3

function getHex(a) {
    var hex = Math.max(0, Math.min(a, 255)).toString(16);
    return hex.length > 1 ? hex : "0" + hex;
}

function rgb(r, g, b) {
    // complete this function
    return [r, g, b].map(getHex).join("").toUpperCase()
}
//მეთოდი N4

function rgb(r, g, b) {
    if (r < 0) r = 0;
    else if (r > 255) r = 255;
    if (g < 0) g = 0;
    else if (g > 255) g = 255;
    if (b < 0) b = 0;
    else if (b > 255) b = 255;
    var val = [r.toString(16).toUpperCase(), g.toString(16).toUpperCase(), b.toString(16).toUpperCase()];
    for (var i = 0; i < val.length; i++) {
        if (val[i].length < 2) val[i] = '0' + val[i];
    }
    return val.join('');
}









rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3