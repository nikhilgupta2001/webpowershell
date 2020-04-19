
  const express = require('express');
  const bodyParser = require('body-parser');
  const _ = require('lodash');
  const ejs = require('ejs');


  const app=express();

  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("images"));
app.use('/', require("./router"))





 app.listen(process.env.PORT||3000,function(){
 console.log("hello world!");
});
