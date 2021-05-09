var displayarray=[];
function getparragraph1()
{for(var i=1;i<=4;i++){
displayarray.push(document.getElementById("name"+i).value);
}
document.getElementById("LMAO").innerHTML=displayarray.join("..");

}
var displayarray2=[];
function getparragraph2()
{for(var i=5;i<=8;i++){
displayarray2.push(document.getElementById("name"+i).value);
}
document.getElementById("Sup").innerHTML=displayarray2.join("..");

}