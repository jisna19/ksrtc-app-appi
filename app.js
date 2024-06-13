const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {usermodel}=require("./models/signup")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jisna19:jisna9947@cluster0.fzxusrj.mongodb.net/busDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/signup",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    user.save()
    console.log(user)
    res.send({"status":"success"})
})


app.listen(8080,()=>{
    console.log("Server started")
})