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

		  		 else if (request.payload.rol == 3 || request.rol == '3' ) 
		  		 {

		  		 	models.sequelize.sync().then(function(){
	                	models.JefeDpto.create({
	                    
		                    Nombre: request.payload.nombre,
		                    Apellido: request.payload.apellido,
		                    Cedula: request.payload.cedula,
		                    Carnet: request.payload.carnet,
		                    Correo: request.payload.email,
		                    Contraseña: request.payload.clave
		                                        
		                });
	            	});

		  		 } 
	  		 

		  	}

		},


		{
		method: 'POST',
	    path:'/Login-busqueda',
	  	handler: (request, reply) => {

	  		return reply.view('registrar');
	  		/*
	  		models.sequelize.sync().then(function(){
	                	 var estudiante = models.Estudiante;
	                	 estudiante.findOne({ where: {Correo: request.payload.Correo} }).then(function(resp1) {

	                	 	if(resp1 != undefined){

	                	 		if(resp1.clave == request.payload.Clave){console.log(resp1.Correo);
	                	 			reply.view('index-estudiante');
	                	 		}
	                	 		else{
	                  	 		console.log('clave invalida');
	                  	 		server.render('registrar');

	                	 		
	                	 		}	
	                	 		
	                	 	}
	                	 	else{	

	                	 		var docente = models.Docente;
	                	 	docente.findOne({ where: {Correo: request.payload.Correo} }).then(function(resp2) {

	                	 	if(resp2 != undefined){

	                	 		console.log(resp2.Correo);
	                	 		if(resp2.Clave == request.payload.Clave){console.log(resp2.Correo);
	                	 			reply.view('index-profesor');
	                	 		}
	                	 		else{
	                	 		console.log('clave invalida');
	                	 		
	                	 		}

	                	 	}
	                	 	else{	
	                	 		var jefedpto = models.JefeDpto;
	                	 		jefedpto.findOne({ where: {Correo: request.payload.Correo} }).then(function(resp3) {

	                	 	if(resp3 != undefined){
	                	 		console.log(resp3.Correo);
	                	 		if(resp3.Contraseña == request.payload.Clave){
	                	 		console.log(resp1.Correo);

	                	 		reply.view('index-admin');
	                	 	}
	                	 		else{
	                	 		console.log('clave invalida');
	                	 		return reply.view('registrar');

	                	 		}
	                	 	}
	                	 	else{	
	                	 		
	                	 			console.log('olvidalo');
	                	 			
	                	 			}// tercer else

								}) // findone 3

	                	 			} // llave del segundo else
							})// llave del findone 2	

	                	 			} //llave del primer else

						})//llave del findone 1
	  			
	  			});
*/
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
	    path:'/modelo-A',
	  	handler: {
    		view: {
      			template: 'modelo-A',
      			context: {
        		title: 'My Template Title',
       			 message: 'This is a message for my view!'
      }
    }
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
