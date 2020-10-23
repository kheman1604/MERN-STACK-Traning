//=-=-=-=-+External Modules (used by npm or yarn)==-=-=-=
var catme=require("cat-me");
// console.log(catme());
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var lc=require("lower-case");
var name=lc.lowerCase("KHEMAN JAIN");
// console.log(name);
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//=-=--=-=-=Core Modules(Inbuilt) =-=-=-=-=-

var os=require("os");
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.release());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.hostname());


