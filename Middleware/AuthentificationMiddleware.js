const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN);
       const userrole = decodedToken.role;
       const userName = decodedToken.name;
       req.auth = {
        userrole: userrole,
        userName: userName
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};