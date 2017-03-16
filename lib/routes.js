'use strict';
        const models = require('./modelos');

module.exports = [
  // Array de rutas
	{
	  method: 'GET',
	  path: '/',
	  handler: (request, reply) => {
	  reply.view('sign-in');
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
		method: 'POST',
	    path:'/registrar-nuevo',
	  	handler: (request, reply) => {

	  		console.log(request.payload.rol);

		  		if (request.payload.rol == 1 || request.rol == '1' ) {

			  		models.sequelize.sync().then(function(){
	                	models.Estudiante.create({
	                    
		                    NombreEstudiante: request.payload.nombre,
		                    ApellidoEstudiante: request.payload.apellido,
		                    Cedula: request.payload.cedula,
		                    Carnet: request.payload.carnet,
		                    Correo: request.payload.email,
		                    clave: request.payload.clave
		                                        
		                });
	            	});

		  		 }
		  		 else if (request.payload.rol == 2 || request.rol == '2' ) 
		  		 {

		  		 	models.sequelize.sync().then(function(){
	                	models.Docente.create({
	                    
		                    Nombre: request.payload.nombre,
		                    Apellido: request.payload.apellido,
		                    Cedula: request.payload.cedula,
		                    Carnet: request.payload.carnet,
		                    Correo: request.payload.email,
		                    clave: request.payload.clave
		                                        
		                });
	            	});

		  		 } 
	  		 

		  	}



		},


		{
		method: 'POST',
	    path:'/Login-busqueda',
	  	handler: (request, reply) => {

	  		models.sequelize.sync().then(function(){
	                	 
	                	 
	                	 console.log(models.estudiante);
	                	 
	  			
	  			});

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
	  	  view: 'index-estudiante'
	  		}
		},
		{
	    method: 'GET',
	    path:'/index-admin',
	  	handler: {
	  	  view: 'index-admin'
	  		}
		},
		{
	    method: 'GET',
	    path:'/modelo-A',
	  	handler: {
	  	  view: 'modelo-A'
	  		}
		},
		{
		method: 'GET',
	    path:'/modelo-B',
	  	handler: {
	  	  view: 'modelo-B'
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
