const fs=require('fs');



// const [ , , name]=process.argv;
// fs.readFile("./msg.txt","utf-8",(err,data)=>{
//     console.log(`${data}${name}`);
// });


// const [ , , iname]=process.argv;
// fs.readFile("./all-names.txt","utf-8",(err,data)=>{
//     console.log(data);
//     const replacedata=data.replaceAll("milan","santosh");
//     console.log(replacedata)
// });






// fs.writeFile("names.txt", data , (err)=>       //filename,data,callback: write new data
// console.log("completed writing"));

// fs.appendFile("all-names.txt", data + "\n", (err)=>       //filename,data,callback: write new data
// console.log("completed writing"));


// fs.unlink("./msg.txt",function(err){
//     console.log("removed");
// });

//bulk update

// fs.readdir('.',function(err,files){

//     console.log(files);
// })

// var files= fs.readdirSync("./nice").filter(fn=>fn.startsWith('.fun'));

// fs.unlink(files,function(err){
//         console.log("removed");
//     });

// const quote="hi";

// const[, , noOfFiles,quote]=process.argv;
// console.log(process.argv)
// for(let i=1;i<=noOfFiles;i++)
// {
//     fs.writeFile(`./backups/test-${i}.html`,quote,(err)=>{
//         console.log("completed writing",i);


//     });
// }



