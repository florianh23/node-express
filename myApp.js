let express = require('express');
let app = express();

console.log("Hello World");


//app.get('/', function(req, res){
  //  res.send('Hello World');
//});



//serve file instead of string
// app.get('/', function(req, res){
   // res.sendFile(__dirname + '/views/index.html')
 //}); 
 //app.use('./public', express.static(__dirname + '/styles.css'));

 app.get('/', function(req, res){
    res.json({message: 'Hello json'});
 });



































 module.exports = app;
