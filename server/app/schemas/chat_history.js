var mongoose = require('mongoose');


var ChatHistorySchema = new mongoose.Schema({
    chatCode : { type: String, index: true } ,
    from: {type: ObjectId, ref: 'User'},
    to :{type: ObjectId, ref: 'User'},
    chat: [{
        content: String,
        createAt: {
            type: Date,
            default: Date.now()
        }
    }]
});





module.exports = ChatHistorySchema;