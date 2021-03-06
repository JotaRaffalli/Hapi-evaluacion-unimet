'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Docente = sequelize.define('Docente', {
    
    idDocente:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

    Nombre:{
      type:DataTypes.STRING,
      allowNull: true
      
    }, 

    Apellido: {
      type: DataTypes.STRING,
      allowNull:true
    },

    Clave: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Cedula: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Correo: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Departamento:{
      type:DataTypes.STRING,
      allowNull:true
    }, 

    Carnet:{ 
     type: DataTypes.STRING,
     allowNull: true
    },

    Autorizado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    
    idDepartamento:{
      type: DataTypes.INTEGER
    },
 
  });
  return Docente;
};