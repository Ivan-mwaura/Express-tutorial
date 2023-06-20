const express = require('express');
const people = require('./routes/people')
const auth = require('./routes/auth')
const app = express();


//set up our static pages
app.use(express.static('./methods-public'))
//parse the form data
app.use(express.urlencoded({extended:false}))
//enable parsing of json body requests
app.use(express.json())

app.use('/api/people', people)
app.use('/login',auth) 

 
app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})