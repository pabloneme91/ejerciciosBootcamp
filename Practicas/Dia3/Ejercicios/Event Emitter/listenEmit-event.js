var moduloEventos = {};

var events = {};

moduloEventos.on = function(evento,cb) {
	if(typeof cb === 'function') {
		if(events[evento])
			events[evento].push(cb);
		else
			events[evento] = [cb];

		return cb;
	}
	else throw new Error('El callback no es funcion');
}

moduloEventos.eliminarListener = function (evento,cb) {
	if(events[evento]) {
		var listener = events[evento].indexOf(cb)
		events[evento].splice(listener,1);
	}
}

moduloEventos.eliminarTodosListeners = function(evento) {
	events[eventos] = [];
} 

moduloEventos.emit = function(evento,parametro) {
	if(events[evento]){
		ejecutarCallBacks(events[evento],parametro);
	}
}

var ejecutarCallBacks = function(arregloCb,parametro) {
	for(i=0;i < arregloCb.length;i++) {
		arregloCb[i](parametro)
	}
}

module.exports = moduloEventos;