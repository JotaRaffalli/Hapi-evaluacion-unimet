'use strict';
module.exports = function(sequelize, DataTypes) {
  var JefeDpto = sequelize.define('JefeDpto', {
    idJefeDpto:{
      type: DataTypes.INTEGER,
     allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    Nombre:{
      type:DataTypes.STRING,
      allowNull: false
      
    }, 
    Contraseña: {
      type:DataTypes.STRING,
      allowNull:false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull:false
    },
    Correo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    Departamento:{
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
        
       JefeDpto.hasMany(models.Seccion,{foreingKey: 'idJefeDpto'});
      }
    }
  });
  return JefeDpto;
};