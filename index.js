const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    return res.send("hello developers");
});

app.get('/main',(req,res)=>{
    return res.json({
        accounts:[
            {
                number:"1002-255-134576",
                name:"주거래 s20통장",
                money:"72,740,000원"
            },
            {
                number:"1002-255-134574",
                name:"주거래 s22통장",
                money:"34,340,000원"
            }
        ],
        month_total_transaction:"860,000원",
        month_due:"260,000원"
    })
})

 app.listen(process.env.PORT||3000,()=>{
    console.log('server is listening'); 
 });