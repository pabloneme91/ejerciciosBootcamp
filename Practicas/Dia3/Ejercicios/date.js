var fecha = {};

fecha.today = function () {
	return new Date();
} 

fecha.eventos = {
	"Navidad": "12-25",
	"Anio Nuevo": "01-01",
	"Reyes" : "01-06"
}

fecha.daysTill = function(evento) {

	var hoy = new Date();
	//fechaEvento = formatearFecha(fechaEvento);
	fecha.eventos[evento] = controlAnio(fecha.eventos[evento]) + "-" + fecha.eventos[evento]; 
	var fechaEventoFormateada = new Date(fecha.eventos[evento]);
	dif = Math.ceil((fechaEventoFormateada - hoy)   / (1000 * 60 * 60 * 24)); 
	return dif;
}



module.exports  = fecha; 

var controlAnio = function(fechaEvento) {
	var anioActual = parseInt(new Date().getYear()) + 1900;
	var diferencia = new Date() - new Date(anioActual + "-" + fechaEvento);
	if(diferencia < 0)
		return anioActual
	else 
		return anioActual + 1 
}

console.log(fecha.daysTill("Navidad"));