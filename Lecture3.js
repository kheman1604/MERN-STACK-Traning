



var price=45.77;
var newprice=price.toFixed(2);// Converts a number into a String with specified number of Decimal Places .
var qty=new Number(15);// Creates and Object of Number Class 
var total= newprice + qty;
console.log(total);

// -=-=-=-=-=-=-=- Setting a Interval in JavaScript =-=-=-=-=-=-=-=
var count=1;
var runTimer=()=>{
    console.log("Time to Start Exam :"+count+" Seconds");
    count++;
}
var initialTimer=setInterval(runTimer,1000);
setTimeout(()=>{
    clearInterval(initialTimer);
},6000);

var exmtimer=()=>{
    console.log("Exam Timer Started")
}
var examTimer=setInterval(exmtimer,6000);


setTimeout(()=>{
    clearInterval(examTimer);
},7000);

