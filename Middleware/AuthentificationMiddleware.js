const jwt=require('jsonwebtoken')
const ls=require('local-storage')

function verifyToken(access){
    return (req,res,next)=>{
        if(ls('token')){
        if(jwt.verify(ls('token'),process.env.ACCESS_TOKEN)){
           const token=jwt.verify(ls('token'),process.env.ACCESS_TOKEN)
           req.user=token
           if(access.includes(req.user.payload.role)){
            next()
           }else{
            res.send('rejected role')
           }
        }else{
            res.send('no token')
        }
        }
    }
}
module.exports= {verifyToken}

