var pg = require('pg');
var conString = process.env.DATABASE_URL+'?ssl=true';
var client = new pg.Client(conString);
client.connect();
/*------------------------------ Usuarios ----------------------------------*/
module.exports.obtenerUsuarios = function obtenerUsuarios(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "USUARIOS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Usuarios = result.rows;
         return res.json(results);
    });
};
module.exports.LogInUsuarios = function logInUsuarios(req, res, next) {
	var results = {};
	client.query('INSERT * INTO "USUARIOS"', function(err, result) {
        if(err) {return console.error(err);}
				if (results.Usuarios.) {

				}
				 results.Usuarios = result.rows;
         return res.json(results);
    });
};
/*------------------------------ Preguntas ----------------------------------*/
module.exports.obtenerPreguntas = function obtenerPreguntas(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "PREGUNTAS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Preguntas = result.rows;
         return res.json(results);
    });
};
/*------------------------------ Trivias ----------------------------------*/
module.exports.obtenerTrivias = function obtenerTrivias(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "TRIVIAS"', function(err, result) {
        if(err) {return console.error(err);}
         results.Trivias = result.rows;
         return res.json(results);
    });
};
/*-------------------------- Trivia - Pregunta ---------------------------*/
module.exports.obtenerTriviaPregunta = function obtenerTriviaPregunta(req, res, next) {
	var results = {};
	client.query('SELECT * FROM "CONTROL_TRIVIA_PREGUNTA"', function(err, result) {
        if(err) {return console.error(err);}
         results.TriviaPregunta = result.rows;
         return res.json(results);
    });
};
