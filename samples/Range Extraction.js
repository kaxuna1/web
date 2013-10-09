function solution(list) {
  var res = [];
  for (var i = 0; i < list.length;) {
    var range = -1,
    str = list[i] + '';
    while (list[i] + 1 == list[++i]) range++;
    if (range > 0) str += '-' + list[i - 1];
    else if(range == 0) --i;
    res.push(str);
  }
  return res.join(',');
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"