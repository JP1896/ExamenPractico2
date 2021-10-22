//CIUDAD - contador de interes, nombre, pais, atractivo del lugar 
const Sequelize = require('sequelize');
const Ciudada = (sequelize)=>{
    sequelize.define('ciudad',{
        id:{
            type: Sequelize.INTEGER, 
            allowNull: false,
            primaryKey: true 
        },
        nombreDeCiudad: Sequelize.STRING
        ,
        pais:Sequelize.STRING
        ,
        atractivoDeLugar:Sequelize.STRING
    })
}
module.exports= Ciudad
