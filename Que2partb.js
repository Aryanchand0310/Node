const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const urlencoded=bodyParser.urlencoded({extended:false})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/one.html")
})

app.post("/",urlencoded,(req,res)=>{
    const file=req.body.num
    res.sendFile(__dirname+"/"+file)
})

app.listen(4000)