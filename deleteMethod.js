const writeInFile = require('./utils/writeInFile')

module.exports = (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/"))
    // console.log('base url --- ', baseURL)

    let id = req.url.split("/")[3]
    // console.log(id);

    if(baseURL === "/api/users" && id){
        let index = req.users.findIndex(user=>{
            return user.id == id
        })
        if(index === -1){
            res.writeHead(404, {"Content-Type":"application/json"})
            res.end(JSON.stringify({title:'not found', message:'invalid id'}))
        }else{
            req.users.splice(index, 1)
            writeInFile(req.users)
            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(req.users))
        }
    }else {
        res.writeHead(404, {"Content-Type":"application/json"})
        res.end(JSON.stringify({title:'not found', message:'route not found'}))
    }
}