var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var credentials = require('./credentials.js');

app.use(cookieParser(credentials.cookieSecret));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'app_server', 'views'));

app.use(express.static(__dirname + '/public'));

var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', require('./app_server/routes/index'));

app.use('/mal', function(req, res){
    mal = req.query.mal;
});

app.use(function(req, res){
    console.log(req.query);
    res.status(404);
    res.send(req.query);
    
});

app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});

app.listen(3000, function(){
      console.log('Unsecure app started on http://localhost:' +  
      3000 + '; press ctrl-c to terminate.');
});
