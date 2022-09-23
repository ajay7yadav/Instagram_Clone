const mongoose = require('mongoose');

const Posts = mongoose.Schema({
    post_url : {
        type : String
    },
    postBy : {
        type : String
    },
    likes : {
        type : [String]
    },
    createAt : {
        type : Date,
        immutable :true,            // never change time
        default : () =>{
            return Date.now()
        }
    },
    updateAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    }
});


module.exports = mongoose.model('posts',Posts);