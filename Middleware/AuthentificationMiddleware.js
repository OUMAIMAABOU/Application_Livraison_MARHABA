const jwt=require('jsonwebtoken')
const ls=require('local-storage')

function verifyToken(){
    return (req,res,next)=>{
        if(ls('token')){
        if(jwt.verify(ls('token'),process.env.ACCESS_TOKEN)){
           const token=jwt.verify(ls('token'),process.env.ACCESS_TOKEN)
           req.user=token
           res.send('anauthorised')
          // if(access.includes(req.user.user.name)){
          //   next()
          // }else{
          //  
          // }
        }
        res.send('anauthenticated')

        }else{
            res.send('anauthenticated')
        }
      
    }
}
module.exports= {verifyToken}

