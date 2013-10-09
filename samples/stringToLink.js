function linkify(input) {
    var urlPattern = new RegExp("(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
    var result = urlPattern.test(input);
    return result ? "<a href='"+input+"'>"+input+"</a>" : input;
}


var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
function linkify(input) {
  if(regex.test(input)) {
    return "<a href='" + input + "'>" + input + "</a>";   
  }
  return input;
}