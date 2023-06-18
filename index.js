const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// const mohitMidlleware =(req,res,next)=>{
//     console.log(req)

// }

app.use(express.static(path.join(__dirname,"public")))
// app.use(mohitMidlleware)

app.get("/home/:name", (req, res) => {
  res.send("Hello World!"+req.params.name);
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all("/test", function (req, res) {
  res.send("HTTP method doesn't have any effect on this route!");
});

app.get("/things/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
