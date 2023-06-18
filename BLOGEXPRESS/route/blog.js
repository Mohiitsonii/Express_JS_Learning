const express = require("express");
const path = require("path");
const router =express.Router()
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    res.render('home')
})

router.get("/blog", (req, res) => {
    blogs.blogs.forEach(e => {
        console.log(e.title)
    });
    // console.log(blogs.blogs)
  res.sendFile(path.join(__dirname, "../templates/bloghome.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  myblog=blogs.blogs.filter((e)=>{
    return e.slug == req.params.slug
  })
  res.sendFile(path.join(__dirname, "../templates/blogdata.html"));
});

module.exports=router