const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");

const auth = {
    auth : {
        api_key: "570efb2286221fb5c7aa6533e92206bc-07bc7b05-9ec67e4f",
        domain: "sandbox6d0ba0616ff44e32b08bf31f9f6477ac.mailgun.org"
    }
}
const transporter = nodemailer.createTransport(mailgun(auth));

const mailOptions = {
    from: "samiurkhan94@gmail.com",
    to: "allpraisethelord@gmail.com",
    subject: "Test ",
    text: "This is a test mail"
}
transporter.sendMail(mailOptions, (err, data) =>{
    if(err){
        console.log("Error occured")
    } else {
        console.log("Message sent!")
    }
})