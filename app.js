const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//var __dirname = "/Users/kutay.akyol/Desktop/nodeJs/nodejs-test-app";

app.use(express.static(__dirname));

app.get("/", function(req, res) {
		res.render("index");
});

app.listen(PORT, function() {
	
	// Note: request and response are usually written as req and res respectively.
	console.log(`App listening on port ${PORT}`);
	
	/*
	app.get('/login', function(req, res) {	
		var account = {
		  givenName: 'Joe',
		  surname: 'Stormtrooper',
		  username: 'tk421',
		  email: 'tk421@stormpath.com',
		  password: 'Changeme1',
		  customData: {
			favoriteColor: 'white'
		  }
		};

		application.createAccount(account, function(err, createdAccount) {
		  if(err){
			  //throw err;
			  console.log("Account not created")
		  } else {
			  res.send("Account has been created!");
			  console.log('Account:', createdAccount);
		  }
		});
	})
	*/
	
	app.get('/getInfo', function(req, res) {
		res.send('Grup Miras resmi web sitesidir.');
		console.log(`//localhost:${PORT}/get has been called..`);
	});
	
	app.get('/getAuthor', function(req, res) {
		res.send('Kutay Akyol');
		console.log(`//localhost:${PORT}/getAuthor ha been called..`);
	});
	
	app.post('/getHomePage', (req, res) => {
		res.sendFile(__dirname + '/index.html');
		console.log('Homepage got successfully!!!')
	});
	
	/*
	app.get('/getMongoDbConn', function(req, res) {
		
		var MongoClient=require('mongodb').MongoClient,format=require('util').format;

		MongoClient.connect('mongodb://127.0.0.1:27017/admin',function(err,db){
		
		if(err){
			//throw err;
			console.log("MongoDb not conncected!");
		} else {
			res.send('MongoDb conncected!');
			console.log("MongoDb conncected!");
			db.close();
		}
		
		});
		
		console.log(`//localhost:${PORT}/getMongoDbConn is called.`);
	});
	*/
	
	/*
	app.get('/getComingSoon', (req, res) => {
		res.sendFile(__dirname + '/comingsoon.html');
		console.log(`//localhost:${PORT}/getComingSoon has been called.`);
		console.log("comingsoon page has been opened..");
		// Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
		// Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
	});
	*/
	/*
	app.get('/login', (req, res) => {
		res.sendFile(__dirname + '/login.html');
		console.log(`//localhost:${PORT}/getLogIn has been called.`);
		console.log("login page has been opened..");
		// Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
		// Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
	});
	
	app.post('/postLogIn', (req, res) => {
		res.sendFile(__dirname + '/logedin.html');
		console.log('Loged in successfully!!!')
	});
	*/
	/*
	if(req.url=='/' || 
	   req.url=='getBasic' || 
	   req.url=='getAuthor' || 
	   req.url=='getMongoDbConn' || 
	   req.url=='getComingSoon' || 
	   req.url=='login' || 
	   req.url=='postLogIn' || 
	   req.url=='getBasic' || 
	   req.url=='getBasic' || 
	   req.url=='getBasic' || 
	   req.url=='getBasic' || 
	   req.url=='getBasic' ||
	   )*/
	
	app.get('*', function(req, res) {
		res.redirect('/index.html');
	});
	
	
});