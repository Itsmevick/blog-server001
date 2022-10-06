const express = require('express');
const router = express.Router();
const Post = require('../schema/Schema');


router.get('/', (req, res)=>{
    res.send("Hello from posts");
});
router.post('/', (req, res)=>{
   const post = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
   });
   post.save()
    .then(data=>{
        res.json(data);
   })
   .catch(err=>{
    res.json({ message:err })
   })
   
});


module.exports = router;