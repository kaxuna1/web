function removeUrlAnchor(url) {
    var s = url.split(/(\#(?!$))/);
    return s[0];
}



// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about');

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1');