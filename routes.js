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
	{
	  method: 'GET',
	  path: '/{param*}',
	  handler: {
	    directory: {
	      path: Path.join(__dirname, '../static/public')
	    }
	  },
	  config: {
	    description: 'Carga todos los archivos estaticos'
	  }
	}

];