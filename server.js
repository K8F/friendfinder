//dependencies
var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");

var app=express();

//set ports
var PORT=process.env.PORT || 8080;

//helps express app handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//start server

app.listen(PORT, function(){
    console.log ("app listening on PORT " + PORT);
})