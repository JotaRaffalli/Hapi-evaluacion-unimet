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
      type:DataTypes.STRING,
      allowNull:false
    }, 
    CodigoMat:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    timestamps:false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Materia.hasMany(models.Seccion,{foreingKey: 'idMateria'});
      }
    }
  });
  return Materia;
};