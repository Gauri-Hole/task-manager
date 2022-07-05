const mongoose = require('mongoose');



//schema defines the sturture of documents
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 character'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

//model provides interface to database
module.exports = mongoose.model('Task', TaskSchema)