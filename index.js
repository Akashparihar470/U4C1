const express = require("express");
const app = express();

app.use(logger);

function logger (req,res,next){
    console.log("before")
    next();
    console.log("after")
}

app.get("/books",(req,res) => {
    res.send({
        Book1: "1.Head First Java",
    })
})

app.get("/libraries",library,(req,res) => {
    res.send({
        place: Ahmedabad,
        permission: per.value
    })
})

function library(req,res,next){
    if(req.path == "/libraries"){
        per.value = true
    }
    else{
        per.value = false;
    }
    next();
    
}

app.get("/authors", author,(req,res) => {
    res.send({
        Book1: "Bert Bates and Kathy Sierra",
        permission: per.value,
    })
})

function author(req,res,next){
    if(req.path == "/authors"){
        per.value = true
    }
    else{
        per.value = false;
    }
    next();
    
}


app.listen(8055, () => {
    console.log("listening port 8050");
})