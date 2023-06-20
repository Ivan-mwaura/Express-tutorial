const http = require('http')
const {readFileSync} = require('fs')
const homepage = readFileSync('./navbar-app/index.html')
const homestyles = readFileSync('./navbar-app/styles.css')
const homelogic = readFileSync('./navbar-app/browser-app.js')
const homelogo = readFileSync('./navbar-app/logo.svg')

const server = http.createServer((req, res)=>{
    const url = req.url

    //homepage
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }
    
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homestyles)
        res.end()
    }
    //image logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homelogo)
        res.end()
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homelogic)
        res.end()
    }
    //404
    else{     
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()       
    }

    
})

server.listen(5000)