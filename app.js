
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("views"));

app.get("/home", function(req, res){
  res.render("home");
});

app.get("/protect", function(req, res){
  res.render("protect");
});

app.get("/topFam", function(req, res){
  res.render("topFam");
});

app.get("/antiVirus", function(req, res){
  res.render("antiVirus");
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("server is running...");
});
