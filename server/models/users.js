var mongoose = require("mongoose");

var User = mongoose.model('User0',{
    email:{
        type: String,
        require: true,
        trim: true,
        minlength: 4
    }
});

module.exports = {User};