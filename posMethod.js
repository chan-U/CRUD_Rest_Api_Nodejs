const bodyParser = require('./utils/bodyParser')
const writeInFile = require('./utils/writeInFile')

module.exports = async (req, res) => {
    if(req.url === "/api/users"){
        try{
            let body = await bodyParser(req)
            body.id = req.users.length + 1
            req.users.push(body)
            writeInFile(req.users)
            res.writeHead(201, {"Content-Type":"application/json"})
            res.end()
        }catch(err){
            res.writeHead(400, {"Content-Type":"application/json"})
            res.end(JSON.stringify({title:'error', message:'error in posting user'}))
        }
    }
}