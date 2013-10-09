function getNames(data){
  var mas=[];
    for(var key in data){
        mas.push(data[key]['name']);
    }
  return mas;
}


var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

alert(getNames(data)); // should return ['Joe', 'Bill', 'Kate']