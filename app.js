//jshint esversion:6

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let jsonParser = bodyParser.json();

let urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', (req, res) => {
  // console.log(req.query);
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res) => {
  var data = {age: 29, job: 'developer', hobbies: ['eating', 'coding', 'sleeping']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
