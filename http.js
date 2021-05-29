const http = require('http')

const server = http.createServer((req , res)=>{
    if(req.url==='/'){
        res.write("welcome to home page")
        res.end()
    }
    if(req.url==='/about'){
        res.write("welcome to about page")
        res.end()
    }
    res.end(`
    <h1> 404 </h1>
    <p> page not found </p> 
    `)
})

server.listen(5000)