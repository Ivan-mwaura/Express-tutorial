const  login = (req, res)=>{
    
    const{name} = req.body

    if(name){
        res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send("Please insert credentials")
}

module.exports = login
