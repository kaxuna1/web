function extractIds(data,mas){
    if(mas===undefined){
    var mas=[];}
   
    for(var key in data){
       
        if(key==="items"){
            for(var i=0;i<data["items"].length;i++){
               mas=arguments.callee(data["items"][i],mas);
            }
        }
        else{
            mas.push(data[key]);
        }
    }
    return mas;
}
var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // უნდა დააბრუნოს [1,2,3,4,5]