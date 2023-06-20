const express = require('express')
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
const morgan  =require('morgan')

//req => middleware =>res

//app.use('/api',[logger, authorize]) => //if you want to access the middlw in all the routes

app.use(morgan('tiny'))//external middleware

app.get('/',(req, res)=>{
    
    res.send('Home')
})
app.get('/about',(req, res)=>{
    
    res.send('About')
})
app.get('/api/products',(req, res)=>{
    
    res.send('products')
})
//if i want to access , middlware in one route,,,,note that we put it inside an array
app.get('/api/items',[logger, authorize],(req, res)=>{
    console.log(req.user)
 res.send('items')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})