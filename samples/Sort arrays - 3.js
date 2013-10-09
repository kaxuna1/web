// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function (courses) {
    var data = {};
    for (var i = 0; i < courses.length; i++) {
        var n = courses[i].split('-');
        data[n[0]] = n[1];
        alert(data[n[0]]);
    }
    
};


sortme(["site-1304", "web-1304", "site-1305", "web-1305"]);