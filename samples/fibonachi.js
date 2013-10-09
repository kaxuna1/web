function genfib(){
  var left = 0, right = 1;
  return function fib(){
    var cur = left;
    left = right;
    right = cur + right;
    return cur;
  }
}
//ფიბონაჩის მიმდევრობა
var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2