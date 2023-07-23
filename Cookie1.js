const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const urlencoded=bodyParser.urlencoded({extended:false})
const cookieParse=require('cookie-parser')
app.use(cookieParse())



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/cook.html")
})



app.post('/',urlencoded,(req,res)=>{
    let a=req.body.num
    let b=req.body.num2
    res.cookie("Name",""+a+" "+b).send("Cookie is set") 
})

app.post('/clear',(req,res)=>{
    res.clearCookie("Name").send("Cookie is deleted")
})

app.post('/show',(req,res)=>{
    res.end(JSON.stringify(req.cookies))
})

app.listen(4000)