'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Seccion = sequelize.define('Seccion', {
    
    idSeccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    Modalidad: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Periodo: {
      type:DataTypes.STRING,
      allowNull:false
    }, 
    
    idDocente:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    idMateria:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
  return Seccion;
};