const mongoose = require('mongoose');

const Users = mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("users", Users);