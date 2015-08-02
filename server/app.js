var express = require('express');
var path = require('path');
var peopleData = require("./public/data/people.json");//defines a variable that requires the people.json file

var app = express();

app.set("port", (process.env.PORT || 5000)); //sets heroku url

app.get('/data/', function(req, res){
   res.json(peopleData);//sends JSON response which is the people.json file defined above to the client side app.js file, see that file for what it's doing
});

app.get("/*", function(req,res){
   var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));//gives html file
});

app.listen(app.get("port"), function(){
   console.log("Listening on Port: " + app.get("port"));
});