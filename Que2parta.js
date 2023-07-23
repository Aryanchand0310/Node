const express=require('express')
const fs=require('fs')
const app=express()

app.get('/',(req,res)=>{
    const b=fs.readFileSync("studentInfo.txt",(err)=>{
        if(err) console.error(err)
        
    })
    const c=b.toString()
    res.send(c)
})

app.listen(5000)

