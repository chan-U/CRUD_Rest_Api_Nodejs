const bodyParser = require('./utils/bodyParser')
const writeInFile = require('./utils/writeInFile')

module.exports = async (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/"))
    let id = req.url.split("/")[3]

    if(baseURL === "/api/users" && id){
        try{
            let body = await bodyParser(req)
            let index = req.users.findIndex(user=>{
                return user.id == id
            })
            if(index === -1){
                res.writeHead(404, {"Content-Type":"application/json"})
                res.end(JSON.stringify({title:'not found', message:'invalid id'}))
            }else{
                req.users[index] = {id, ...body}
                writeInFile(req.users)
                res.writeHead(200, {"Content-Type":"application/json"})
                res.end(JSON.stringify(req.users[index]))
            }
        }catch(err){}
    }else {
        res.writeHead(404, {"Content-Type":"application/json"})
        res.end(JSON.stringify({title:'not found', message:'route not found'}))
    }
}