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

app.get('/transaction',(req,res)=>{
    return res.json({
        month_consumption:"1,204,800",
        month_gain:"3,042,000",
        bank_consumptions:[
            {
                percent:24,
                card:{
                    card_name:"하나체크카드",
                    card_consumption:"293,800"
                }
            },
            {
                percent:25,
                card:{
                    card_name:"신한체크카드",
                    card_consumption:"304,400"
                }
            },
            {
                percent:23,
                card:{
                    card_name:"IBK기업체크카드",
                    card_consumption:"287,500"
                }
            },
            {
                percent:26,
                card:{
                    card_name:"우리체크카드",
                    card_consumption:"319,500"
                }
            }
        ],
        stores:[
            {
                img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/Group+3214.png",
                name:"스타벅스",
                consumption:"42,5000"
            },
            {
                img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/Group+3217.png",
                name:"교촌치킨",
                consumption:"42,5000"
            },
            {
                img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/Group+3218.png",
                name:"교보문고",
                consumption:"42,0000"
            }
        ]
    })
})



app.get('/month_transaction',(req,res)=>{
    return res.json({
        up_down:[
            {
                day:1,
                money:"u"
            },
            {
                day:15,
                money:"d"
            },
            {
                day:16,
                money:"u"
            },
            {
                day:18,
                money:"d"
            },
            {
                day:20,
                money:"d"
            },
            {
                day:21,
                money:"d"
            },
            {
                day:25,
                money:"u"
            }
        ]
    })
      
})


app.get('/month_transaction_datail',(req,res)=>{

    var day=Number(req.query('day'));

    if(day==1){
        return res.json({
            day:1,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else if(day==15){
        return res.json({
            day:15,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else if(day==16){
        return res.json({
            day:16,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else if(day==18){

        return res.json({
            day:18,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })


    }
    else if(day==20){

        return res.json({
            day:20,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else if(day==21){

        return res.json({
            day:21,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else if(day==25){

        return res.json({
            day:25,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    else{
        return res.json({
            day:0,
            consumption:"-14,000",
            transaction:[
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/hanalogo.png",
                    money:"12,000",
                    content:"홍두깨"
                },
                {
                    img_url:"https://babyboom.s3-ap-northeast-1.amazonaws.com/ibklogo.png",
                    money:"-6,000",
                    content:"스타벅스"
                }
            ]
        })

    }
    
})



 app.listen(process.env.PORT||3000,()=>{
    console.log('server is listening'); 
 });