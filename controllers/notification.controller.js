const Notification2 = require('../models/notification.model.js');

// controller for the notification request




// accept the new notifdication request and return the tracking ID

exports.acceptNotificationRequest = async (req, res) => {

const notifdicationObj = {
    ticketId: req.body.ticketId,
    subject: req.body.subject,
    content: req.body.content,
    requester: req.body.requester,
    reciepientEmails: req.body.recepientEmails
}

try{
const notificationCreated = await Notification2.create(notifdicationObj);

res.status(201).send({
    requestId: notificationCreated._id,
    status: "Accept Request - it is in-Progress",
    // requester: notificationCreated.requester,
    // subject: notificationCreated.subject,
    // recepientEmails: notificationCreated.recepientEmails
    
})

} catch (err){
    console.log("Error will accepting a notification request");
    res.status(500).send ({
        message: "Error will accepting a notifiaction request"
    })
}
}


// Check the notifiaction status if email is sent or not using the tracking Id

exports.getNotificationStatus = async (req, res) => {
    
const reqId = req.params.id;

try {
const notification = await Notification2.findOne({ticketid: reqId});

res.status(200).send({
    ticketId: notification.ticketId,
    sentStatus: notification.sentStatus

})
} catch (err){
    console.log(err);
    return res.status(500).send({
        message: "Internal error while fatching notification status"
    })
}

} 


