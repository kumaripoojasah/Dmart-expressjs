const express=require('express');
const router=express.Router();

router.get("/products", (req, res) => {
     const productsDetails = [
        {
            prod_id: "P101",
            prod_name: "Laptop",
            prod_price: 50000,
            prod_quantity: 10
        },
        {
            prod_id: "P102",
            prod_name: "Mouse",
            prod_price: 800,
            prod_quantity: 50
        },
        {
            prod_id: "P103",
            prod_name: "Keyboard",
            prod_price: 1200,
            prod_quantity: 40
        },
        {
            prod_id: "P104",
            prod_name: "Monitor",
            prod_price: 15000,
            prod_quantity: 20
        },
        {
            prod_id: "P105",
            prod_name: "Printer",
            prod_price: 8500,
            prod_quantity: 15
        },
        {
            prod_id: "P106",
            prod_name: "Speaker",
            prod_price: 2500,
            prod_quantity: 30
        },
        {
            prod_id: "P107",
            prod_name: "Headphones",
            prod_price: 1800,
            prod_quantity: 25
        },
        {
            prod_id: "P108",
            prod_name: "Webcam",
            prod_price: 2200,
            prod_quantity: 18
        },
        {
            prod_id: "P109",
            prod_name: "SSD",
            prod_price: 6500,
            prod_quantity: 12
        },
        {
            prod_id: "P110",
            prod_name: "Power Bank",
            prod_price: 2000,
            prod_quantity: 35
        }
    ];
    res.send(productsDetails);
});

module.exports = router;