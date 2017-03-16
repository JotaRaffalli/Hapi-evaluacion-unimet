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
      allowNull: false
    },
  },

  {
    timestamps: false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
       //Docente.hasMany(models.Seccion,{foreingKey: 'idSeccion'});
       //Docente.hasMany(models.ModeloA,{foreingKey: 'idModeloA'});
      }
    }
  });
  return Docente;
};