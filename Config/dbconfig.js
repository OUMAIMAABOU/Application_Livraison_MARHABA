const mongoose=require('mongoose')
module.exports=
 mongoose.connect(process.env.MONG_URL)
.then(reresults=>console.log('connection succ',reresults))
.catch((err=> console.log(err)))   

