const jwt=require('jsonwebtoken')
const ls=require('local-storage')

function verifyToken(){
    return (req,res,next)=>
    {
        if(ls('token'))
        {
            if(jwt.verify(ls('token'),process.env.ACCESS_TOKEN))
            {
                req.user=jwt.verify(ls('token'),process.env.ACCESS_TOKEN)
                next()
            }
        }else res.send('no token')
    }
}
module.exports= {verifyToken}

