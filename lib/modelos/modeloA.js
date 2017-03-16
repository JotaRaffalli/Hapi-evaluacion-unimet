'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var ModeloA = sequelize.define('ModeloA', {
  
    idModeloA:{
      type: DataTypes.INTEGER,
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 

    Fecha:{
      type:DataTypes.STRING,
      allowNull:false
    }, 

    // Falta agregar el ID de quien hace la evaluación!!

    Completado: {
      type:DataTypes.BOOLEAN,
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
     P18: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P19: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P20: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P21: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P22: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P23: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P24: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P25: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P26: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P27: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P28: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P29: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P31: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P32: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P33: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P34: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P35: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P36: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P37: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P38: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P41: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P42: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P43: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P44: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P45: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P51: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P52: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P53: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P54: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P55: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P56: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P57: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P61: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P62: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P63: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P71: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P72: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P73: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P81: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P82: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P83: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P84: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P85: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
     P86: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, 

  {
    timestamps:false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        ModeloA.hasMany(models.Seccion,{foreingKey: 'idSeccion'});
        ModeloA.hasOne(models.Docente,{foreingKey: 'idDocente'});
      }
    }
  });
  return ModeloA;
};