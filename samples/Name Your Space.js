function namespace(root, path, value){
    var s=path.split(".");
    
    
    if(s.length===0)return value;
    else{root[s[0]]={};}
    var obj1=root[s.shift];
    return arguments.callee(obj1,s.join(","),value);
    
}
stuff = {}
    
namespace(stuff, 'moreStuff.name', 'the stuff')
// results in {moreStuff: {name: 'the stuff'}}
 