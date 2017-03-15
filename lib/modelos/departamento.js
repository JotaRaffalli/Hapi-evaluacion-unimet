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
    }
     
  },
 
   {
    
   timestamps:false,   
  
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Departamento.hasMany(models.Docente,{foreingKey: 'idDepartamento'});
        Departamento.hasMany(models.Materia,{foreingKey: 'idDepartamento'});
      }
    }
  },{
      timestamps:false
  });
  
  return Departamento;
};