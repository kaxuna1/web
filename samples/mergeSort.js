function mergesorted(a, b) {
    var mas = [];
    var IndexA = 0;
    var IndexB = 0;
    for (var i = 0; i < a.length + b.length; i++) {
        if(b[IndexB]===undefined&&a[IndexA]===undefined){break;}
        if (a[IndexA] < b[IndexB]||b[IndexB]===undefined) {
            mas.push(a[IndexA]);
            IndexA++;
        };
        if (a[IndexA] < b[IndexB]||a[IndexA]===undefined) {
            mas.push(b[IndexB]);
            IndexB++;
        };
        if (a[IndexA] === b[IndexB]&&b[IndexB]!==undefined) {
            mas.push(b[IndexB]);
            IndexB++;
            mas.push(a[IndexA]);
            IndexA++;
            i++;
        };
        


    }
    return mas;
}


mergesorted([1, 2], [3, 4]); //should: [1,2,3,4]

mergesorted([1, 2], [3]); //should: [1,2,3]

mergesorted([1], [2, 3]); //should: [1,2,3]