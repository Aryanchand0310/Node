const fs = require("fs");
const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const urlencoded=bodyParser.urlencoded({extended:false})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/one.html")
})



app.post("/",urlencoded,(req,res)=>{
    let user={Name:req.body.num}
    
    const data = JSON.stringify(user);

try {
  fs.writeFileSync("data.json", data);
} catch (error) {
  console.error(error);

  throw error;
}
console.log("data.json written correctly");
    
    
    res.end("Data "+data+" written success")
})

app.listen(4000,()=>console.log("Server started"))