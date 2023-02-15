
const mongoose = require('mongoose');
const constants = require("../utils/constants");


const notification2Schema = new mongoose.Schema({

    subject : {
        type: String,
        required: true
    },
    ticketId: {
        type: String,
        required: true
    },
    content: {
type: String,
required: true
    },
    reciepientEmails: {
        type: [String],
        required: true
    },
requester: {
    type: String,
    required: true
},
sentStatus: {
    type: String,
    required: true,
    default:constants.sentStatus.unsent
},
createdAt: {
    type: Date,
    immutable: true,
    default: () => {
        return Date.now()
    }
},
updatedAt: {
    type: Date,
    deafult: () => {
        return Date.now()
    }
}

})
module.exports = mongoose.model("Notification2", notification2Schema)