const logger = (req, res, next)=>{
    const method = req.method
    const url =req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    //res.end('testing  middleware')
    next()
}
module.exports = logger;
