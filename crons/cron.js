// we will take help of node-cron to repeat some line of code at regular interval

const nodeCron = require('node-cron');

// evevery 05 seconds
const job = nodeCron.schedule(" */05 * * * * * ", function () {
    console.log("Hello Students")//new Date().toLocaleString());

    // i need to send email
    // get the list of all the notification to be sent
    // Send email for each notifications
})


