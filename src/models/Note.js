const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: String,
    body: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sharedWith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Note', noteSchema);