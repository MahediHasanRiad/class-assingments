let http = require('http')
let fs = require('fs')


let server = http.createServer(function(req, res){

    if(req.url === '/'){
        fs.readFile('./html/index.html', function(err, data){
            res.writeHead(200, {'content-type': 'text/html'}) 
            res.write(data)
            res.end()
        })
    }
    else if(req.url === '/about'){
        fs.readFile('./html/about.html', function(err, data){
            res.writeHead(200, {'content-type': 'text/html'}) 
            res.write(data)
            res.end()
        })
    }
    else if(req.url === '/contact'){
        fs.readFile('./html/contact_us.html', function(err, data){ 
            res.writeHead(200, {'content-type': 'text/html'})     
            res.write(data)
            res.end()
        })
    }
    else{
        res.end('<h1>404</h1>')
    }
})


server.listen(5050)
console.log('server is on...')

