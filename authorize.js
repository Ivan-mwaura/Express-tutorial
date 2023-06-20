const authorize = (req, res, next)=>{

    const {user} = req.query
    if(user === 'evans'){
        req.user = {name:'evans', id:'3'}
        next()
    }
    else{
        res.status(404).send('Unauthorized')
    }
   
    
}
module.exports = authorize; 