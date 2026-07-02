const express=require('express');
const router=express.Router();

router.get("/employee",(req,res)=>{
    const employeeDetails=[
        {
            emp_id: "E101",
            emp_name: "John Doe",
            emp_address:"Jaynagar",
            emp_phno:"6202780977"
        },
        {
            emp_id: "E102",
            emp_name: "Ronita",
            emp_address:"Delhi",
            emp_phno:"9875463210"
        },
        {
            emp_id: "E103",
            emp_name: "Nia",
            emp_address:"Mumbai",
            emp_phno:"6202780977"
        },
        {
            emp_id: "E104",
            emp_name: "Geeta",
            emp_address:"Assam",
            emp_phno:"6202780977"
        },
        {
            emp_id: "E105",
            emp_name: "Jia",
            emp_address:"krpuram",
            emp_phno:"6202780977"
        },
        {
            emp_id: "E106",
            emp_name: "Jevika",
            emp_address:"Jaynagar",
            emp_phno:"62563897263"
        },
        {
            emp_id: "E107",
            emp_name: "jasmin",
            emp_address:"tin factory",
            emp_phno:"6202788877"
        },
        {
            emp_id: "E108",
            emp_name: "bobby Deol",
            emp_address:"hazaribagh",
            emp_phno:"3452780977"
        },
        {
            emp_id: "E109",
            emp_name: "karishma",
            emp_address:"Golden city",
            emp_phno:"5672780977"
        },
        {
            emp_id: "E110",
            emp_name: "Jaklin",
            emp_address:"karolbagh",
            emp_phno:"7892780977"
        }
    ];
    res.send(employeeDetails);
});
module.exports=router;