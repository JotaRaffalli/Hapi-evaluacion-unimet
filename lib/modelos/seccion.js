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
      allowNull:false
    },

    Periodo: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, 

  {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Seccion.belongsToMany(models.Estudiante,{through: 'SeccionEstudiante'});
      }
    }
  });
  return Seccion;
};