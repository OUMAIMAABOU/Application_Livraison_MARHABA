
  exports.Login = (req, res) =>
  {
      res.status(200).send({
        name:req.body.name,
        age:req.body.age,
      })       
  };

  exports.Register = (req, res) => {
    res.status(200).send({
      name:req.body.name,
      age:req.body.age,
    })     
  };

  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };



