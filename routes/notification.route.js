const notificationController = require("../controllers/notification.controller");
const cron = require("../crons/cron");



module.exports = (app) => {

  app.post("/notiServe/api/v1/notifications",notificationController.acceptNotificationRequest)

  app.get("/notiServe/api/v1/notifications/:id",notificationController.getNotificationStatus);

 }

// For POST Call
// {  
// "ticketId":"1245889",
//     "subject":"Join the second class",
//     "content":"Dear my students join the next class",
//     "requester":"Sanajy Verma",
//     reciepientEmails:"2849sanjay@gmail.com"
// }
