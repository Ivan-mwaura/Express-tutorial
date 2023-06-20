const express = require('express')
const path = require('path')
const app = express();

//option 1 (setup static and middleware) add to static assets 
app.use(express.static('./public'))

//option 2(use send file directly as response)
/*app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

})*/

//option 3(use server side rendering) SSR

app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})