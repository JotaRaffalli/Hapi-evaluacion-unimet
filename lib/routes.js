'use strict';

module.exports = [
  // Array de rutas
	{
	  method: 'GET',
	  path: '/',
	  handler: (request, reply) => {
	  view: 'sign-in'
	  },
	  config: {
	    description: 'Ruta principal: Lleva al Sign in para comenzar el proceso de autenticación'
	  }
	},

	// Poner Todas las demás rutas aca plz

	{
    method: 'GET',
    path:'/registrar', 
  	handler: {
  	  view: 'registrar'
  		}
	},
	{
    method: 'GET',
    path:'/index-profesor', 
  	handler: {
  	  view: 'index-profesor'
  		}
	},
	{
    method: 'GET',
    path:'/index-estudiante', 
  	handler: {
  	  view: 'index=estudiante'
  		}
	},
	{
    method: 'GET',
    path:'/index-admin', 
  	handler: {
  	  view: 'index-admin'
  		}
	},









	// Poner Todas las demás rutas aca plz




	// Dependencias Estáticas

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
