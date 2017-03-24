'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var JefeDpto = sequelize.define('JefeDpto', {
    
    idJefeDpto:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

    NombreJefe:{
      type:DataTypes.STRING,
      allowNull: true
      
    }, 

    ApellidoJefe: {
      type: DataTypes.STRING,
      allowNull:true
    },

    Clave: {
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

    CarnetJefe:{ 
     type: DataTypes.STRING,
     allowNull: true
    },

    Cedula: {
      type:DataTypes.STRING,
      allowNull:true
    },
    
    idDepartamento:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
  return JefeDpto;
};