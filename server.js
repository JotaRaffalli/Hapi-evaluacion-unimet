'use strict';
// Dependencias 
const Hapi = require('hapi');
const Vision = require('vision')
const Ejs = require('ejs');

// Crea el servidor 
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3000
});

//Plugins
server.register(Vision, function (err) {  
  if (err) {
    console.log('Cannot register vision')
  }

  // Configura el motor de renderizado 
  server.views({
    engines: {
      html: Ejs
    },
    path: __dirname+'/views'
  })
})


// Rutas
server.route({
    method: 'GET',
    path:'/test', 
  	handler: {
  	  view: 'index'
  	}
});

server.route({
    method: 'GET',
    path:'/sign-in', 
  	handler: {
  	  view: 'sign-in'
  	}
});

server.route({
    method: 'GET',
    path:'/main', 
    handler: {
      view: 'main'
    }
});


// Levanta el servidor
server.start(function(err) {  
  if (err) {
    throw err
  }

  console.log('Server running at: ', server.info.uri)
})