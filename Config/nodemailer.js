  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service:process.env.SERVICE,
    auth: {
      user:process.env.USER, 
      pass: process.env.PASSEMAIL, 
    },
  });
   exports.sendEmail = (email,activemail,username)=>{
    transporter.sendMail({
      from: process.env.USER, 
      to: email, 
      subject: "confirmer email",  
      html: "<h3>HELLO " + username+'?</h3><p> Please click <a href="http://localhost:8080/api/auth/configiration/'+activemail+ '"> here </a> to activate your account.</p>',
    },(error,info)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(" send");
        }
    })
  }
 
  
  // module.exports = {sendEmail}


