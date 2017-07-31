var mongoose = require('mongoose');
var ChatHistorySchema = require('../schemas/chat_history');
var ChatHistory = mongoose.model('ChatHistory', ChatHistorySchema);

module.exports = ChatHistory;
