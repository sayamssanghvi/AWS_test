var express = require('express');
var {mongoose}=require('./Files/mongoose');
var {Task}=require('./Files/Task');

var app=express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send({
        status:200
    });
});

app.post('/',(req,res)=>{

    var ntask=new Task({
        name:req.body.title
    })
    
    ntask.save().then((result)=>{
        res.send(result);
    }).catch((error)=>{
        res.send({
            Error:error
        });
    });
});

app.listen(3000,()=>{
    console.log("Server is up and working....");
});