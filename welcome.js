console.log("hello")


const marks=[60,90,50,150];
console.log(Math.max(...marks));


//DOM: there is no dom
const os=require('os');
console.log("the memory", os.freemem());
console.log("total memory",os.totalmem());
console.log("version",os.version());
console.log("processor",os.cpus());

//CPUZ


// os gives us different commands
const[ , , first,second]=process.argv;
const inputvalues=process.argv;
console.log(inputvalues[3]);

const sum=(a,b)=>a+b;
console.log(sum(+first,+second));


