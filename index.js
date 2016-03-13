var exp = require("express");
var path = require("path");
var body = require("body-parser");
var filePath = path.resolve(__dirname,"static");
var exApp = exp();
exApp.get("/",function(req,res){
   res.sendFile(filePath + "/index.html");
});
exApp.listen(5037,function(){
    console.log("Server started");
});

