const express=require('express')
const app=express()

const cookieParse=require('cookie-parser')
app.use(cookieParse())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/cookie.html")
})

app.post('/set',(req,res)=>{
    res.cookie("Name","Salik").send("Cookie is set") 
})

app.post('/clear',(req,res)=>{
    res.clearCookie("Name").send("Cookie is deleted")
})

app.post('/show',(req,res)=>{
    res.end(JSON.stringify(req.cookies))
})

app.listen(4000)