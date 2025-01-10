const express=require("express");
const  app=express();;

//  body{
//     title: String;
//     descritption:string;    
//}

app.use(express.json());

app.post("/todo",function(req,res){

})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){

})