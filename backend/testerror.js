app.all('*',(req,res,next)=>{
    next(new CatchError(`can't find this route:${req.originalUrl}`,400))

})
//global error handling middleware
app.use((err,req,res,next)=>{
   err.statuscode=err.statuscode||500
   err.status=err.status ||'error'
   res.status(err.statuscode).json({
       status:err.status,
       error:err,
       message:err.message,
       stack:err.stack,
   })
})



//Async error
app.get('/', (req, res) => {
    setTimeout(() => {
        console.log("Async code example.")
       throw new CatchError(`please remplir`,400);
    }, 1000)
  })