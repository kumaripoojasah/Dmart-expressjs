const express=require('express');
const router=express.Router();

router.get("/payment",(req,res)=>{
    const paymentDetail=[
        {
            Bill_no: "PAY001",
            Bill_amount: 50000,
            Bill_date: "2026-02-01"
        },
        {
            Bill_no: "PAY002",
            Bill_amount: 800,
            Bill_date: "2026-03-12"
        }   
            
        
        ,
         {
            Bill_no: "PAY003",
            Bill_amount: 800,
            Bill_date: "2026-10-02"
        },
         {
            Bill_no: "PAY004",
            Bill_amount: 800,
            Bill_date: "2026-05-12"
        },
         {
            Bill_no: "PAY005",
            Bill_amount: 800,
            Bill_date: "2025-09-12"
        },
           
         {
            Bill_id: "PAY006",
            Bill_amount: 800,
            Bill_date: "2023-10-02"
        },
         {
            Bill_id: "PAY007",
            Bill_amount: 800,
            Bill_date: "2026-07-12"
        },
         {
            Bill_id: "PAY008",
            Bill_amount: 800,
            Bill_date: "2024-08-02"
        },
         {
            Bill_id: "PAY009",
            Bill_amount: 800,
            Bill_date: "2023-10-12"
        },
         {
            Bill_id: "PAY010",
            Bill_amount: 800,
            Bill_date: "2026-10-02"
        }
    ];
    res.send(paymentDetail);
});
module.exports=router;