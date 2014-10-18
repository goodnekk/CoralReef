var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});

requirejs(['express', 'http', 'routes', 'path'], function (express, http, routes, path) {
	
	//load express
	var app = express();

	// all environments
	app.set('port', 5002);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.static(path.join(__dirname, 'static')));

	//routes
	app.get('/', routes.index);
	app.get('/componenteditor', routes.componenteditor);



	//setup the server
	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port'));
	});

});