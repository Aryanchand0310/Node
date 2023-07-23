const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const urlencoded=bodyParser.urlencoded({extended:false})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/one.html")
})

app.post("/",urlencoded,(req,res)=>{
    let a=parseInt(req.body.num)
    
    let inc=a+1
    let dec=a-1
    let sq=a*a
    
    res.end("Increment :"+inc+"\nDecrement :"+dec+"\nSquare :"+sq)
})

app.listen(4000)