'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Materia = sequelize.define('Materia', {
    
    idMateria:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

    NombreMateria:{
      type:DataTypes.STRING
    }, 

    CodigoMat:{
      type:DataTypes.STRING
    },

    Modalidad:{
      type:DataTypes.STRING
    },

    CantidadDeAlumnos:{
      type:DataTypes.INTEGER
    },
    
    idDepartamento:{
      type: DataTypes.INTEGER
    },
 
  });

  return Materia;

};