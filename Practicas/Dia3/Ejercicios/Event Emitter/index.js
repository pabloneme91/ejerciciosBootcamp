var moduloEventos = require('./listenEmit-event.js');

moduloEventos.on("newUser", function(parametro){ console.log("El parametro es " + parametro)})
moduloEventos.on("newUser", function(parametro){ console.log("enviar mail a cliente " + parametro)})

moduloEventos.emit("newUser", 'Hola');

//eliminarListener("newUser", function(){ console.log('saludar')})
//eliminarListener("newUser", evento)
