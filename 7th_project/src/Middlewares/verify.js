const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const data = req.headers['student-token']

    jwt.verify(data, 'riad123', (err, decoded) => {
        if(err){
            res.json({massage: 'err', err})
        }else{
            
            let username = decoded['data']['0']['UserName']
            let password = decoded['data']['0']['Password']

            req.headers.username = username
            req.headers.password = password
            // console.log(password)
        
            next()
        }
    })
}

module.exports = verifyToken