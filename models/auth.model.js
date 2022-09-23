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
    },
    post : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : 'posts'
    }
});

module.exports = mongoose.model("users", Users);