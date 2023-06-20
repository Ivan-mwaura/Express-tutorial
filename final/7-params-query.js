const express = require('express')
const app = express();

const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products/:productID' ,(req, res)=>{

    console.log(req.params)//returns a string

    const{productID}= req.params

    /*const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })*/

    const singleProduct = products.find((product) => product.id === Number(productID))
    
    if(!singleProduct){
        return res.status(404).send('<h1>Product not found</h1>')
    }
    else{
        return res.json(singleProduct)
    }
})

//second example using query strings/parameters || url parameters

app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)

    const {search, limit}= req.query

    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        
        //res.status(404).send('<h1>product not found</h1>')
        res.status(404).json({success:'true', data:[]})
    }

    res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
}) 