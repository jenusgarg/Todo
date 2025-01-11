const express=require("express");
const  app=express();;
const { createTodo,updateTodo }= require("./types");
const { todo } = require("./Database");


//  body{
//     title: String;
//     descritption:string;    
//}

app.use(express.json());

app.post("/todo", async function(req,res){
         const createPayload=req.body;
         const parsedPayload=createTodo.safeParse(createPayload);

         if(!parsedPayload.success){
            res.status(411).json({
                msg: "You sent the wrong inputs",
            })

         }
        
         await todo.create({
            username:     req.body.title,
            description:  req.body.description,
            completed:    false
        })

        res.json({
            msg: "Todo Created"
        })


})

app.get("/todos",async function(req,res){
        
    const todos= await todo.find({});
    
    console.log(todos); // promise
    
    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
       res.status(411).json({
           msg: "You sent the wrong inputs",
       })

    }


    await todo.update({
        _id : req.body.id
    },{
      completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);
