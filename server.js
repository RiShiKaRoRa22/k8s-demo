const express= require("express")

const os= require("os");


const app= express();

app.get("/", (req,res)=>{
    res.send("hi from pod: "+ os.hostname() );
})

app.listen(5000, ()=>{
    console.log("app is running on port 5000");
})