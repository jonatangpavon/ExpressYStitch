
var express = require('express');
var logger = require('morgan');

//una ayuda para resolver path relativos
var path = require('path');

//Inicializar la aplicación
var app = express();

app.use(logger({immediate: true, format: 'dev'}));

app.get('/',function(req,res){
	var html = path.resolve(__dirname + '/../index.html');
	res.sendfile(html);
});

//Puerto 5000
app.listen(5000);
console.log("Server is running");
