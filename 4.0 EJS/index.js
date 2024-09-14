import express from "express";
var app =express();
var port=3000;
app.listen(port,()=>{
    console.log("Server is Running");
})
var d=new Date();
var day=d.getDay();
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        dayType: day,
        advice:"Nice Day"
    });
})