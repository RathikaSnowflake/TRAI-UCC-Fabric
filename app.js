/************************************************************ 
COPY RIGHTS TO TECH MAHINDRA
************************************************************/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');
var cons = require('consolidate');
var crypto = require('crypto');
var formidable = require('formidable');
var routes = require('./routes/index');
var users = require('./routes/user');
var route = require('./route.js');
// for encryption of password
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';


var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var bodyParser = require('body-parser').json();
var env = process.env.NODE_ENV || 'development';

var home_page =  require('./routes/login-dnd-registration');
var logindndregistration =  require('./routes/login-dnd-registration');
var viewdndregistration =  require('./routes/view-dnd-registration');
var logindndcomplaintregistration =  require('./routes/login-dnd-complaint-registration');
var viewdndcomplaintregistration =  require('./routes/view-dnd-complaint-registration');
var logintrackcomplaints =  require('./routes/login-track-complaints');
var trackcomplaints =  require('./routes/track-complaints');
var telemarketer =  require('./routes/tele-marketer');
var addcategory =  require('./routes/add-category');
var logintrai =  require('./routes/login-trai');
var telemarketerregistration =  require('./routes/telemarketer-registration');
var viewsubcategory =  require('./routes/view-sub-category');
var logintelemarketer =  require('./routes/login-telemarketer');

var navbar =  require('./routes/navbar');
var footer =  require('./routes/footer');
var navbarcategory= require('./routes/navbar-category');
var viewnavbar =  require('./routes/viewnavbar');
var navbartelemarketer =  require('./routes/navbartelemarketer');
var navbartmreg =  require('./routes/navbartelemarketer-registraion');

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

// view engine setup
/* 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
//app.use(logger('dev')); //uncomment to check http requests
/* modifications for html  */

app.engine('html',cons.swig);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');

/* modifications for html */ 

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/login-dnd-registration.html',home_page);
app.use('/login-dnd-registration.html',logindndregistration);
app.use('/view-dnd-registration.html',viewdndregistration);
app.use('/login-dnd-complaint-registration.html',logindndcomplaintregistration);
app.use('/view-dnd-complaint-registration.html',viewdndcomplaintregistration);
app.use('/login-track-complaints.html',logintrackcomplaints);
app.use('/track-complaints.html',trackcomplaints);
app.use('/tele-marketer.html',telemarketer);
app.use('/add-category.html',addcategory);
app.use('/login-trai.html',logintrai);
app.use('/telemarketer-registration.html',telemarketerregistration);
app.use('/view-sub-category.html',viewsubcategory);
app.use('/login-telemarketer.html',logintelemarketer);

app.use('/navbar.html',navbar);
app.use('/navbar-category.html',navbarcategory);
app.use('/footer.html',footer);
app.use('/view-navbar.html',viewnavbar);
app.use('/navbartelemarketer.html',navbartelemarketer);
app.use('/navbartelemarketer-registraion.html',navbartmreg);

app.get('/query/GetSubscriberAndPreferenceDetails/:arg1/:arg2',function(req,res){
	console.log("fetch jax");
    route.queryGetSubscriberAndPreferenceDetails(req,res);

})

app.get('/query/GetsubcriberComplaintsByMobileNoComplaintNo/:arg1',function(req,res){
    route.queryGetsubcriberComplaintsByMobileNoComplaintNo(req,res);

})
app.get('/query/GetTraiDetailedReport/:arg1/:arg2/:arg3/:arg4',function(req,res){
                 route.queryGetTraiDetailedReport(req,res);

})

app.get('/query/scrubbing/:arg1/',function(req,res){
                 route.queryscrubbing(req,res);

})
app.get('/query/GetTelemarketerDetails/:arg1/',function(req,res){
                 route.queryGetTelemarketerDetails(req,res);

})

app.get('/query/GetTraiDetailedReport/:arg1/:arg2/:arg3/:arg4',function(req,res){
                 route.queryGetTraiDetailedReport(req,res);

})
app.get('/query/GetPreferenceCategory/:arg1',function(req,res){
                 route.queryGetPreferenceCategory(req,res);

})
app.get('/query/GetAllPreferenceCategories',function(req,res){
                 route.queryGetAllPreferenceCategories(req,res);

})

app.get('/query/GetTokenIDDetails/:arg1',function(req,res){
                 route.queryGetTokenIDDetails(req,res);

})
app.get('/query/GetSubCategoriesByCategoryID/:arg1/:arg2',function(req,res){
                 route.queryGetSubCategoriesByCategoryID(req,res);

})
app.get('/query/GetPreferenceSubCategory/:arg1',function(req,res){
                 route.queryGetPreferenceSubCategory(req,res);

})
app.get('/query/GetAllSubCategories',function(req,res){
                 route.queryGetAllSubCategories(req,res);

})
app.post('/invoke',function(request,reply){
	route.invoke(request,reply);
})

//encrypt & decrypt password starts here
app.post('/telemarketer',function(request,reply){	
console.log("hi");
console.log("request.body "+JSON.stringify(request.body));
var data = JSON.stringify(request.body.jsonblob);
console.log("data  " + data);
var pan = request.body.jsonblob.PAN_Number;
var pwd = request.body.jsonblob.Password;
var cipher = crypto.createCipher(algorithm,password)
var cryptedpan = cipher.update(pan,'utf8','hex')
cryptedpan += cipher.final('hex');
console.log("cryptedpan"+cryptedpan);
  
  var cipher = crypto.createCipher(algorithm,password)
  var cryptedpwd = cipher.update(pwd,'utf8','hex')
  cryptedpwd += cipher.final('hex');

  console.log("cryptedpwd"+cryptedpwd);
  console.log("JSON.stringify(cryptedpan)"+JSON.stringify(cryptedpan));
  console.log("JSON.stringify(cryptedpwd)"+JSON.stringify(cryptedpwd));
  var crypted = cryptedpan + cryptedpwd;
  var json_data = JSON.stringify({
         				"jsonblob" : {    
         					 "PAN_Number":cryptedpan,
         			    	 "Password": cryptedpwd	
         				}
         				
         		});
  console.log("crypted" + json_data);
  console.log("crypted" + JSON.stringify(json_data));
    reply.send(JSON.stringify(json_data));
  })


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {

  console.log('Express server listening on port ' + server.address().port);

});


module.exports = app;
