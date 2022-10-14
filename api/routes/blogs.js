const express = require('express');
const router = express.Router();
const Post = require('../schema/blogSchema');
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });


//Creating a new post
router.post('/',async (req, res)=>{
   const post = await new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    category: req.body.category,
   }); 
   await post.save()
    .then(data=>{
        res.json(data);
   })
   .catch(err=>{
    res.json({ message:err })
   })
   
});

//Retrieving all the posts
router.get('/', (req, res, next)=>{
    Post.find({}, (err, data)=>{
        if(err){
            res.send(err)
            next()
        }else{
            res.json(data)
            next()
        }
    })
});

//Retrieving a specific post
router.get('/post/:id', (req, res, next)=>{
    Post.findById(req.params.id, (err, data)=>{
        if(err){
           res.send(err);
           next();
        }else{
           res.json(data);
           next();
        }
    });
});


module.exports = router;