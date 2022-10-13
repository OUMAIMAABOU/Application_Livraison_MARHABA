
// method : post => url : api/auth/login =>acces : Public
  exports.Login = (req, res) =>
  {
    try{
     res.status(200).send(req.body) 
    }catch(e){ console.log(e) }
 
             
  };

// method : post => url : api/auth/Register =>acces : Public

  exports.Register = (req, res) => {
    res.status(200).send({
      name:req.body.name,
      age:req.body.age,
    })     
  };

// method : post => url : api/auth/login =>acces : Public
  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };



