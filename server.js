'use strict';
// Dependencias ------------------------------------------------------------------------
const Hapi = require('hapi');
const Routes = require('./lib/routes');
const Vision = require('vision')
const Ejs = require('ejs');
const Inert = require('inert');
const models = require('./lib/modelos');

// Crea el servidor --------------------------------------------------------------------
const server = new Hapi.Server();
server.connection({

    host: process.env.IP,
    port: process.env.PORT

});

//Plugins ------------------------------------------------------------------------------
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

//Inicializa las Rutas ------------------------------------------------------------------

server.route(Routes);


// sincronizacion de los modelos

 models.sequelize.sync().then(function(){
        console.log('Updated Database');
    });
    

// Archivos Estaticos
server.register(require('inert'), function(err) {
   if (err) {throw err;}

   server.route({
     method : 'GET', path : '/public/{path*}',
     handler : {
       directory : {
       path : './public',
       listing : false,
       index : false
       }
    }

   });

});
// Levanta el servidor -------------------------------------------------------------------
server.start(function(err) {
  if (err) {
    throw err
  }

  console.log('Server running at: ', server.info.uri)
})
