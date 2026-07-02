const express=require('express');
const router=express.Router();

router.get("/customer",(req,res)=>{
    const customerDetails=[
        {
            cust_id: "C101",
            cust_name: "John Doe",
            cust_address:"Jaynagar",
            cust_phno:"6202780977"
        },
        {
            cust_id: "C102",
            cust_name: "Ronita",
            cust_address:"Delhi",
            cust_phno:"9875463210"
        },
        {
            cust_id: "C103",
            cust_name: "Nia",
            cust_address:"Mumbai",
            cust_phno:"6202780977"
        },
        {
            cust_id: "C104",
            cust_name: "Geeta",
            cust_address:"Assam",
            cust_phno:"6202780977"
        },
        {
            cust_id: "C105",
            cust_name: "Jia",
            cust_address:"krpuram",
            cust_phno:"6202780977"
        },
        {
            cust_id: "C106",
            cust_name: "Jevika",
            cust_address:"Jaynagar",
            cust_phno:"62563897263"
        },
        {
            cust_id: "C107",
            cust_name: "jasmin",
            cust_address:"tin factory",
            cust_phno:"6202788877"
        },
        {
            cust_id: "C108",
            cust_name: "bobby Deol",
            cust_address:"hazaribagh",
            cust_phno:"3452780977"
        },
        {
            cust_id: "C109",
            cust_name: "karishma",
            cust_address:"Golden city",
            cust_phno:"5672780977"
        },
        {
            cust_id: "C110",
            cust_name: "Jaklin",
            cust_address:"karolbagh",
            cust_phno:"7892780977"
        }
    ];
    res.send(customerDetails);
});
module.exports=router;