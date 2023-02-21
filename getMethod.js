// const http = require("http")

module.exports = (req, res) => {
    // console.log('get method');
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/"))
    // console.log('base url --- ', baseURL);
    let id = req.url.split("/")[3]
    // console.log('id ---', id);
    if(req.url === '/api/users'){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(req.users)) 
    }
    else if(baseURL === "/api/users" && id){
        // console.log(req.users.length);
        let index = req.users.findIndex(user=>{
            return user.id == id
        })
        if(index !== -1){
            // console.log('if id')
            let filteredResults = req.users.filter((user)=>{
                return id == user.id
            })
            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(filteredResults))
        }else {
            // console.log('else of if id')
            res.writeHead(404, {"Content-Type":"application/json"})
            res.end(JSON.stringify({title:'not found', message:'id not found in users'}))
        }
    }
    else {
        res.writeHead(404, {"Content-Type":"text/html"})
        res.end(JSON.stringify({title:'not found', message:'path incorrect'}))
    }
}