
var express = require('express'),
path = require('path'),
stitch = require('stitch');
// stitch el client-side modules
//Creamos un paquete

var package = stitch.createPackage({
paths: [
	__dirname+ '/../app',
		
],
dependencies:[
__dirname+ '/../libs/jquery.js',
__dirname+ '/../libs/underscore.js',
__dirname+ '/../libs/backbone.js',		
]
});

var app = express();

app.use(express.static(__dirname + '/public'));

//Cuando el cliente realice una solicitud, nosotros desplegamos los modulos como bundle.js

app.get('/static/bundle.js', package.createServer());

app.get('/', function(req, res){
	console.log("--> /");
	var html = path.resolve(__dirname + '/../index.html');
	res.sendfile(html);
});

app.listen(5000);
console.log("Server is running");

