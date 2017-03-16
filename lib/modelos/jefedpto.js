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
      allowNull: false
      
    }, 

    ApellidoJefe: {
      type: DataTypes.STRING,
      allowNull:false
    },

    DepartamentoJefe:{
      type:DataTypes.STRING,
      allowNull:false
    }, 

    CarnetJefe:{ 
     type: DataTypes.STRING,
     allowNull: false
    }
    },

    {

    timestamps: false,
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
       JefeDpto.belongsTo(models.departamento,{foreingKey: 'idJefeDpto'});
       JefeDpto.hasMany(models.ModeloA,{foreingKey: 'idJefeDpto'});
      }
    }
  });
  return JefeDpto;
};