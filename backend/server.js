const express=require('express');
const app=express();

app.use(express.json());

const PORT=3000;

app.get('/home',(req,res)=>{
    res.send('namaste aapka swagat hai!');
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port:${PORT}`);
})