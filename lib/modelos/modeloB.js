'use strict';
module.exports = function(sequelize, DataTypes) {
 
  var ModeloB = sequelize.define('ModeloB', {
   
    idModeloB:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

    Fecha:{
      type:DataTypes.STRING,
      allowNull:false
    }, 

    NombreMateria:{
      type:DataTypes.STRING,
      allowNull:false
    },

    CodigoMat:{
      type:DataTypes.STRING,
      allowNull:false
    },

    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    idSeccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    idEstudiante:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    P1: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P2: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P3: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P4: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P5: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P6: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P7: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P8: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P9: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P10: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P11: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P12: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P13: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P14: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P15: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P16: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    P17: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
      
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
  },

  {
      timestamps:false
  });
  
  return Departamento;
};