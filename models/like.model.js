const mongoose = require('mongoose');

const Like = mongoose.Schema({
    postId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'posts'
    },
    userId : {
        type : String
    }

});


module.exports = mongoose.model('likes',Like);