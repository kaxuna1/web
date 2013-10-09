function nthFibo(n)
{
    var fib=new genfib();
    var data=data||{};
    if(data[n]!==undefined)return data[n];
    var i=1;
    while(i<=n){
        data[i]=fib();
        i++;
    }
    return data[i];

}
function genfib(){
  var left = 0, right = 1;
  return function fib(){
    var cur = left;
    left = right;
    right = cur + right;
    return cur;
  };
}
nthFibo(4) == 2; //aris true