const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    return "hello developers";
});

 app.listen(process.env.PORT||3000,()=>{
    console.log('server is listening'); 
 });