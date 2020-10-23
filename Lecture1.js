// =-=-=-=-=-=-=-=-=-=-=-=--Lecture 1 =-=-=-=-=-=-=-=-=-=-=

// Method 1 : Traditional Function Declaration and Calling 
function Square(r){
    return(r*r);
}
var output=Square(100);
console.log("Traditional Funtion ki Output : " + output);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Method 2 : Anonymous Function Declarations and Calling
var anonsquare=function(r){
return(r*r);
}
var anonoutput=Square(3);
console.log("Anonymous Function ki output : "+anonoutput);
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Method 3 : Using Arrow funtions without arguments 
var fun=()=>{
    console.log("Arrow Function is Called without argument");
}
fun();
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Method 4 : Using Arrow funtions with arguments 
var arrowsq=(r)=>{
    return(r*r);
}
console.log(arrowsq(3));
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Method 5 : Using Arrow funtions with a single Statement
var cube=r=>r*r*r;
console.log("Single Statement arrow function cube is called and output is :"+ cube(9));