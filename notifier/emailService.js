
// This file will have logic the send the email

const nodeMailer = require("nodemailer");

// I need to setup the nodemailer for send the emails
// smtp host details
// credential if needed;

const transporter = nodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth : {
        user: 'vish007dev@gmail.com',
        pass: 'Welcome@07'
    },
    secure: true
});

const mailDataObj = {
    from: 'salmanKhan@bollywood.com',
    to: '2849sanjay@gmail.com',
    subject: 'very important message',
    text: 'there is nothing important than time in life'
}

transporter.sendMail(mailDataObj, (err, info) => {
if(err){
    console.log(err);
} else {
    console.log(info);
}
})
