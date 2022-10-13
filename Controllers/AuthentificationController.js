const CatchError = require('../Utils/CatchError')

// method : post => url : api/auth/login =>acces : Public
  exports.Login =  (req,res) => {
    try{
    res.status(200).send(req.body)
  }catch(e){
    throw  CatchError(`Remplir tous les champs`,400);
    
    }
}
 

// method : post => url : api/auth/Register =>acces : Public

  exports.Register = (req, res) => {
    if(!req.body){
      throw new CatchError(`Remplir tous les champs`,400);
     }
      res.status(200).send(req.body)    
     
  };

// method : post => url : api/auth/login =>acces : Public
  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };





