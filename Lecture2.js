//=-=-=-=-=-=-=-=-=-=-= Lecture 2 =-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-= Passing Functions =-=-=-=-=-=-=-

var fun1=()=>{
    console.log("Hi");
}
var fun2=()=>{
    console.log("Hello");
}
var Combined=(x,y)=>{
    x();
    y();
}
Combined(fun1,fun2);

//-=-=-=-=-=- Returning a Function =-=-=-=-=-=-==
var Calculate=(x)=>{
    if(x=="sum")
       return (a,b)=>{ //Here anonymous arrow function is being returned
           return(a+b);
       }
    else 
        if(x=="multiply")
            return (a,b)=>{
                return(a*b);
            }
}

var ResponseFx=Calculate("multiply"); // ResponseFx receives the address of the function that is being returned 
var output=ResponseFx(5,10);
console.log(output);

//--=-=-=-=-=-=-=-=-=- Spread Operator =-=-=-=-=-=-=-=-
var sum=0;
var doSum = (...data)=>{
    
    data.forEach(value=>sum+=value);
}
doSum(1,2,3,4,5,6);
console.log(sum)