var express = require('express');
//home = require('./routes/home.js');
customer = require('./routes/customer.js');
//home = require('./routes/first.js');
//customer = require('./routes/leads.js');
var path = require('path');

var app = express();

//for home and customer without routes
//the lengthy tech. to write code for routing with url (the code seems messy by keeping url for diff. files)

/*
app.get('/', function (req, res){
    res.send('welcome to the first page');
    });
app.get('/leads', function (req, res){
    res.send('welcome to the leads page');
});
app.get('/leads/contact', function (req, res){
    res.send('welcome to the  leads contact page');
});
*/



// the optimised tech. to write code for routing

/*
app.get('/', first.index);
app.get('/leads', leads.index);
app.get('/leads/contact', customer.contact)
 */



//customer/20  when url need parameters

 /*
app.get("/customer/:id", function (req,res){
    res.send("Customer selected is " + req.params.id)
})

//customer/?id=500  when url need query strings
app.get("/customer", function (req,res){
    res.send("Customer selected is " + req.query.id)
})
   */



// Configure our application with diff. environment  and enhancing app with middleware
//by default  the environment is development but we can change it by just firing the command [ set NODE_ENV=production node index.js ]

/*
app.configure('production', function(){
//middleware
    app.set('title', 'CRM Application');
});

app.configure('development', function(){
//middleware
    app.set('title', 'CRM Application - development');
});

app.get('/', function(req, res)
{
    res.send("value of title is " + app.get('title'));
});
 */



// Configuration  for views

/*
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname + '/public')));
});

app.get('/', function(req, res){
    res.render('first')
});
   // creating layout and extending it in index

app.get('/index', function(req, res){
    res.render('index.jade')
});
     //embedding javascript in the jade
app.get('/script', function(req, res){
    res.render('script.jade')
});
*/



// for calling all the files in the views

/*
app.get('/:viewname', function(req, res){
    res.render('req.params.viewname')
})
   */



 app.configure(function(){
 app.set('views', __dirname + '/views');
 app.set('view engine', 'jade');

 app.use(express.bodyParser());
 app.use(express.methodOverride());
 app.use(express.static(path.join(__dirname + '/public')));
 });

/*app.get('/', home.index);
app.get('/contact', home.contact); */

app.get('/customer/create', customer.create);
app.get('/customer', customer.index);
app.post('/customer/create', customer.createCustomer);



           app.listen(1337);
    console.log("Server running at http://localhost:1337");
