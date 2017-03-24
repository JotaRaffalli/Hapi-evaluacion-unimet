'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var TablaTransicion = sequelize.define('TablaTransicion', {
    
     idTabla:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

     idSeccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 

     idEstudiante:{
      type: DataTypes.INTEGER,
      allowNull: false
     },
     
     Completado:{
      type: DataTypes.BOOLEAN,
      allowNull: false
     },

  });
  
  return TablaTransicion;

};