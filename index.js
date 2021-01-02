const express = require("express")



const app = express()

app.use(express.static('/public'));
app.use(`/css`, express.static(__dirname +"/css"))


app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html")
})




app.listen("3000" , () =>{
    console.log("server running on the port 3000")
})