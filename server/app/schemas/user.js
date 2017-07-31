var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    openId: {
        unique: true,
        type: String
    },
    email: {
        unique: true,
        type: String
    },
    alias : String,
    // 0: client
    // 1: manager
    role: {
        type: Number,
        default: 0
    },
    relation :[{
        openId :String
    }]
});





module.exports = UserSchema;