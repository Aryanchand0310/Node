const express=require('express')
const app=express()
const http=require('http').Server(app)
const io=require('socket.io')(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/2.html")
})

io.on('connection',(socket)=>{
    console.log("Thank you")
    setTimeout(()=>{
        socket.send(JSON.stringify({Name:"Salik",Roll:62}))
    },1000)
  
    socket.on('disconnect',()=>{
        console.log("Disconnected")
    })
})

http.listen(2001)