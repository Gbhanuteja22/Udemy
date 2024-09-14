const fs= require("fs");
cd
fs.readFile("./msg.txt","UTF-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})