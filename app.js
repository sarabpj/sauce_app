var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes/sauces')

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// for custom css
app.use(express.static(__dirname + '/public'));

app.use('/sauces', routes.sauces);

app.get('/', function(req,res){
  res.redirect('/sauces')
});


app.get('*', function(req,res){
  res.status(404).redener('404');
})

app.listen(3000, function(){
  console.log("Listening on port 3000....")
});

module.exports ={
  app
}