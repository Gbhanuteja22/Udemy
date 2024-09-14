import express from "express"
var app=express();
var port=8000;
app.listen(port,()=>{
    console.log("Server is running");
});
app.get("/",(req,res)=>{
    res.send("HELLO Earth!");
})
app.get("/button",(req,res)=>{
    res.send("index.html");
})