/*A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1) your referral bonus, and

2) the price of a beer can

For example:*/
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
   if(bonus==price)return 1;
    if(bonus<price)return 0;
  try{
    var total=0;
    var level=1;
    while(total<=bonus){
        total+=level*level*price;
        level++;
    }}
    catch(e){}
    return level-2;
}



beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16