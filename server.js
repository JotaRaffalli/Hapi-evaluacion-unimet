'use strict';

const Hapi = require('hapi');
const Vision = require('vision')
const Ejs = require('ejs');

// Create a server with a host and port
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

  // configure template support   
  server.views({
    engines: {
      html: Ejs
    },
    path: __dirname+'/views'
  })
})


// Add the route
server.route({
    method: 'GET',
    path:'/test', 
  	handler: {
  	  view: 'index'
  	}
});

server.route({
    method: 'GET',
    path:'/main', 
    handler: {
      view: 'main'
    }
});


// Start the server
server.start(function(err) {  
  if (err) {
    throw err
  }

  console.log('Server running at: ', server.info.uri)
})