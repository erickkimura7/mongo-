var mongoose = require("mongoose");

var Todo = mongoose.model('nham', {

    text: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
        
    },
    completeAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};