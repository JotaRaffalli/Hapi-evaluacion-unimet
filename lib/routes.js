'use strict';

module.exports = [
  // Array de rutas
	{
	  method: 'GET',
	  path: '/',
	  handler: (request, reply) => {
	    reply('Hola Mundo');
	  },
	  config: {
	    description: 'Ruta principal: Lleva al Sign in para comenzar el proceso de autenticación'
	  }
	},

	// Poner Todas las demás rutas aca plz











	// Poner Todas las demás rutas aca plz




	// Dependencias Estáticas



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



	// {
	//   method: 'GET',
	//   path: '/{param*}',
	//   handler: {
	//     directory: {
	//       path: Path.join(__dirname, '../static/public')
	//     }
	//   },
	//   config: {
	//     description: 'Carga todos los archivos estaticos'
	//   }
	// }

];
