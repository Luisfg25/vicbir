'use strict';
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan'); // formerly express.logger
var errorhandler = require('errorhandler');
var mongoose = require('mongoose');
var app = express();
 
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
 
// express/connect middleware
app.use(favicon(__dirname + '/app/favicon.ico'));
app.use(morgan('dev'));
 
// serve up static assets
app.use(express.static(path.join(__dirname, 'app')));
app.use('/bower_components',  express.static(__dirname + 'app/bower_components'));
 
// development only
if ('development' === app.get('env')) {
  app.use(errorhandler());
}
 
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection error'));
db.once('open', function(){
	//We're connected!
});

Schema = mongoose.Schema;

	var ImageSchema = new Schema({
		fileName: String,
		url: String,
		contentType: String,
		size: String,
		dimensions: String
})

http.createServer(app).listen(app.get('port'), function () {
   console.log('myApp server listening on port ' + app.get('port'));
});