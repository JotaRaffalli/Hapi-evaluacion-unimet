'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Estudiante = sequelize.define('Estudiante', {
  
    idEstudiante:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    NombreEstudiante: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Correo: {
      type:DataTypes.STRING,
      allowNull:true
    },

    ApellidoEstudiante: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Carrera: {
      type:DataTypes.STRING,
      allowNull:true
    },

    clave: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Carnet: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Cedula: {
      type:DataTypes.STRING,
      allowNull:true
    },

  }, 
 
  {

    timestamps:false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Estudiante.belongsToMany(models.Seccion,{through: 'SeccionEstudiante'});
      }
    }
  });
  return Estudiante;
};