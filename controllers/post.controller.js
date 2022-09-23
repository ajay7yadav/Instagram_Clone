const User = require('../models/auth.model');
const Post = require('../models/post.model');

// Handler for create post on instagram
exports.createPost = async(req, res)=>{
    const postObj = {
        post_url : req.body.post_url,
        postBy : req.userId
    };

    const post = await Post.create(postObj);

    let user = await User.findOne({userId : req.userId});
    user.post.push(post._id);
    await user.save();

    try {
        res.status(201).send({message : 'post uploaded'});
    }catch(err){
        console.log(err.message);
        res.status(500).send({message : 'Oops something is wrong !'});
    }
}

// Handler for get all post by login user
exports.getPostByUser = async(req, res)=>{
    //const user = req.userId

    let posts = await Post.find({postBy : req.userId});

    try {
        res.status(200).send(posts);

    }catch(err){

        console.log(err.message);
        res.status(500).send({message : 'Internal Error !'});
    }
}

// Get all Recently added post
exports.getRecentlyAdded = async(req, res)=>{

    let posts = await Post.find().sort({createAt : -1});

    try {
        res.status(200).send(posts);

    }catch(err){

        console.log(err.message);
        res.status(500).send({message : 'Internal Error !'});
    }
}

// Delete post by Id
// exports.deletePost = async(req, res)=>{
//     const Id = req.params.id;
//     const post = await Post.deleteOne({_id : Id});
//     const user = await User.findOne({userId : req.userId});

//     user.post
// }