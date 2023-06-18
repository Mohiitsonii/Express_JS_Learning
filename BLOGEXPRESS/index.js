const express = require("express");
var exphbs = require("express-handlebars");
const path =require('path')
const app=express()
const port = 3000;
app.engine(
  "handlebars",
  exphbs.engine({ extname: ".handlebars", defaultLayout: "main" })
);
app.set("view engine", "handlebars");

app.use('/',require(path.join(__dirname,'route/blog.js')))

app.listen(3000, () => {
  console.log("blog app running on port 3000");
});