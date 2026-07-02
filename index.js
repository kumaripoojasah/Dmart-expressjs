var express = require('express');

var app = express();
var customer = require('./customer');
var employee=require('./employee');
var payment = require('./payment');
var product = require('./product');

app.use('/customer', customer);
app.use('/employee', employee);
app.use('/payment', payment);
app.use('/products', product);
app.listen(4000, function() {
    console.log("Server running on http://localhost:4000");
});
