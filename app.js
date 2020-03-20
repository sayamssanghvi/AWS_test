var express = require('express');
var Data=require('./Files/Data');
require('./Files/mongoose');

var app=express();

app.use(express.json());


app.get('/id/:id',(req,res)=>{


    Data.find({id:req.params.id})
    .then((result)=>{
        console.log(result);
        res.send(result);
    }).catch((e)=>{
        console.log("Error:"+e);
        res.send({
            status:'error'
        })
    })

});

app.get('/cnumber/:no',(req,res)=>{
    
    Data.find({certificate_number:req.params.no})
    .then((result)=>{
        console.log(result);
        res.send(result);
    }).catch((e)=>{
        console.log("Error:"+e);
        res.send({
            status:'error'
        })
    });
    
});

app.get('*',(req,res)=>{
    res.send({
        Error:"Page does not exist"
    }).status(404);
});

app.listen(3000,()=>{
    console.log("Server is up and working....");
});