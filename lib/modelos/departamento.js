'use strict';

module.exports = function(sequelize, DataTypes) {
 
  var Departamento = sequelize.define('Departamento', {
   
    idDepartamento:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    NombreDep: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
  
  return Departamento;
};