const mongoose = require('mongoose');

const Commenets = mongoose.Schema({
    commenet:{
        type : String
    },
    postId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'posts'
    },
    userId : {
        type : String
    },
    createAt : {
        type : Date,
        immutable :true,    
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

module.exports = mongoose.model('comments',Commenets);