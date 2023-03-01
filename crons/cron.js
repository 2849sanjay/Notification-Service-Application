const Notification2 = require("../models/notification.model");
const constants = require("../utils/constants");
const emailTransporter = require("../notifier/emailService");


// we will take help of node-cron to repeat some line of code at regular interval
const nodeCron = require('node-cron');

// evevery 05 seconds
const job = nodeCron.schedule(" */10 * * * * * ", function () {
    console.log("Hello Students")//new Date().toLocaleString());

    // i need to send email
    // get the list of all the notification to be sent
    // Send email for each notifications 
    
const notifications = Notification2.find({
    sentStatus:constants.sentStatus.unsent
})

notifications.forEach(notification2 => {
    console.log(notification2.recepientEmails);

    const mailData = {
        from: "cron-notification-service@gmail.com",
        to: notification2.recepientEmails,
        subject: notification2.subject,
        text: notification2.content
    };
    emailTransporter.sendMail(mailData, async (err, info) => {
    if(err){
console.log("some error happened", err);
    } else{
        
        // update the status of notification
   
        const saveNotification = await Notification2.find({
            _id: notification2._id
        })
        saveNotification.sentStatus = constants.sentStatus.sent;

        await saveNotification.save();
    
        }
    })
})

}   )


