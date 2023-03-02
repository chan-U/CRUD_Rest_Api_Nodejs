const path = require('path')
const fs = require('fs')

module.exports = (data) => {
    try {
        fs.writeFileSync(
            path.join(__dirname, "..", "users.json"),
            JSON.stringify(data)
        )
    }catch(err){
        
    }
}