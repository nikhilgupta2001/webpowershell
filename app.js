
  const express = require('express');
  const bodyParser = require('body-parser');
  const _ = require('lodash');
  const ejs = require('ejs');


  const app=express();
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("images"));


app.get("/",function(req,res){
  res.render("index");
});
app.get("/prevention",function(req,res){
  res.render("prevention");
});
























app.listen(3000, function() {
  console.log("Server started on port 3000");
});
