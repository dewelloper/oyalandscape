const routes = require('express').Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
//var Firebase = require("firebase");

//allow
//https://myaccount.google.com/lesssecureapps?pli=1

routes.get('/test', (req, res) => {
  res.status(200).json({ message: 'test!' });
});

routes.post('/Email', (req, res) =>{

    var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secureConnection: false,
        port: 587,
        requiresAuth: true,
        domains: ["gmail.com", "googlemail.com"],
        auth: {
            user: "dewelloper@gmail.com", 
            pass: "Arven98303018*"
        }
});  

  var mailOptions = {
      from: 'dewelloper@gmail.com',
      to:'dewelloper@gmail.com',
      subject: req.body.subject,
      //text: req.body.content,
      html: '<p>'+req.body.content+' </p>'
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error while sending mail: ' + error);
    } else {
        console.log('Message sent: %s', info.messageId);
    }
    smtpTransport.close();
});  

})

module.exports = routes;





  