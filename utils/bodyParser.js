module.exports = (request) => {
    return new Promise(async (resolve, reject)=>{
        try{
            let body = ""
            request.on('data', (chunk)=>{
                body += chunk
            })
            request.on('end', ()=>{
                resolve(JSON.parse(body))
            })
        }catch(err){
            reject(err)
        }
    })
}