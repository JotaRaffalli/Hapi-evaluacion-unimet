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
      allowNull: false
      
    }, 
    Apellido: {
      type: DataTypes.STRING,
      allowNull:false
    },
    Cedula:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    Carnet:{ 
     type: DataTypes.STRING,
     allowNull: false
     
    }
  },

  {
    timestamps: false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
       Docente.hasMany(models.Seccion,{foreingKey: 'idDocente'});
      }
    }
  });
  return Docente;
};