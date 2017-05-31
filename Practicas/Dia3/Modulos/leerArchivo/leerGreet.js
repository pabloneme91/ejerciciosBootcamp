var fs = require('fs');

/*Lectura Sincronico*/

//var saludo = fs.readFileAsync(__dirname + '/greet.txt', 'utf8'); //__dirname guarda la ruta donde estoy.
//console.log(saludo);


/*Lectura Asincronico*/

var saludo = fs.readFile(__dirname + '/greet.txt', 'utf8',function() {
	console.log('hola');	
}); //__dirname guarda la ruta donde estoy.
console.log(saludo);

	