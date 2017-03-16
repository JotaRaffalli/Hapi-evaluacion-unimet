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

    Contraseña: {
      type:DataTypes.STRING,
      allowNull:true
    },

    Apellido: {
      type: DataTypes.STRING,
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

    },

    {

    timestamps: false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
       //JefeDpto.belongsTo(models.Departamento,{foreingKey: 'NombreDep'});
       JefeDpto.hasMany(models.ModeloA,{foreingKey: 'idModeloA'});
      }
    }
  });
  return JefeDpto;
};