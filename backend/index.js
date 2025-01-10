const express = require("express");
const cors = require("cors");
const app = express();
const options = {origin:"*"}
app.use(cors(options));
app.use(express.json());

app.post('/',(req,res)=> {
    studentData.push(req.body);
    console.log(req.body);
    res.send("Done")

})

const data=['hello',123,{"key":"value"}];
app.get('/',(req,res) =>{
    res.send(data)
})
let studentData =[ 
    {
    name:"xxxx",
    age:22,
    rollNumber:233027    
    },
];
app.get('/student',(req,res)=>{
    res.send(studentData);
})

app.listen(3333,()=>{
    console.log("started hhg")
})
