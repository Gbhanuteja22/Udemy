//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath}  from "url";
var app=express();
var port=3000;
var __dirname= dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
var auth=false;
function passcheck(req,res,next){
    if(req.body["password"]==="ILoveProgramming"){
        auth=true;
    }
    next();
}
app.use(passcheck);
app.listen(port,()=>{
    console.log("Server is Running");
    console.log(__dirname);
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/check",(req,res)=>{
    console.log(req.body);
    if(auth===true){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
})