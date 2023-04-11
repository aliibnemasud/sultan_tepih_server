const express = require("express");
const router = express.Router();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_API_KEY)


// Sending message function
function emailSender(data){
    const {name, email, phone, message} = data;  
    const msg = {
      to: 'mdmasudrony@gmail.com', // Change to your recipient
      from: 'aliibnemasud@gmail.com', // Change to your verified sender
      subject: `${name} massaged you from your Website.`,    
      html: `<div>
      <h3>Message Details</h3>
      <h4>Name: ${name}</h4>
      <h4>Phone: ${phone}</h4>
      <h4>Email: ${email}</h4>
      <h4>Message: ${message}</h4>
    </div>`,
    }
  
    sgMail.send(msg)
      .then(() => {
        // console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    }


router.route("/message")

/**
* @api {get} sending message
**/

.post(async (req, res, next) => {
    try {
              
      emailSender(req.body)

      res.status(200).json({
        status: "Success!",
        message: "Message send Successfully!",
        data: req.body,
      });
      
    } catch (error) {
      res.status(400).send({
        status: "Field!",
        message: "Data inserted Fail",
        error: error.message,
      });
    }
  })


module.exports = router;