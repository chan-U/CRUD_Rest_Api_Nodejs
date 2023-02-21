const http = require("http")
const users = require('./users.json')
const getMethod = require('./getMethod')
const deleteMethod = require('./deleteMethod')
const postMethod = require('./posMethod')
const putMethod = require('./putMethod')

http.createServer((req, res)=>{
    req.users = users
    
    switch(req.method){
        case 'GET':
            getMethod(req, res)
            break;
        case 'POST':
            postMethod(req, res)
            break;
        case 'PUT':
            putMethod(req, res)
            break;
        case 'DELETE':
            deleteMethod(req, res)
            break;
        default:
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end('Not found')
    }

}).listen(8080, ()=>{
    console.log('success')  
})