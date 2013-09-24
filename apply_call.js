function calc(){
var c=0;
	for(var i=0;i<arguments.length;i++)
	{c+=arguments[i];}
	this.c=c;
}
var ninja1={};
var ninja2={};
calc.apply(ninja1,[1,2,3,4,5]);
calc.apply(ninja2,[4,2,3,4,5]);
alert(ninja1.c);