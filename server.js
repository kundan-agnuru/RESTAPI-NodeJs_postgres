const express = require('express')
const userRoute = require('./src/students/routes/userRoute');

const app = express();
const port  = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello guys");
})

app.use("/users", userRoute);

app.listen(port, ()=>console.log(`app listening on ${port}`));