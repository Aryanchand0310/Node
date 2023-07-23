const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const validator=require('express-validator')

const urlencoded=bodyParser.urlencoded({extended:false})
app.use(urlencoded)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/validator.html")
})

app.post("/",[
    validator.body("name").notEmpty().withMessage("Name is required").isLength({min:5,max:15}),
    validator.body("reg").notEmpty().withMessage("Registeration no required").isLength({min:4,max:8}),
    validator.body("roll").notEmpty().withMessage("Roll no is required").isLength({min:1,max:2}),
    validator.body("mobile").isMobilePhone("en-IN").withMessage("Mobile number is invalid").isLength({min:7,max:15}),
    validator.body("email").isEmail().withMessage("Email is invalid").isLength({min:8,max:20})
],(req,res)=>{
    const errors=validator.validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({error:errors.array()})
    }
    
        res.send(JSON.stringify(req.body))
    
})

app.listen(4000)