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
      allowNull:false
    },
    
    Correo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    
    ApellidoEstudiante: {
      type:DataTypes.STRING,
      allowNull:false
    },
    
    Carrera: {
      type:DataTypes.STRING,
      allowNull:true
    },
    
    clave: {
      type:DataTypes.STRING,
      allowNull:false
    },
    
    Carnet: {
      type:DataTypes.STRING,
      allowNull:false
    },

  });
  return Estudiante;
};