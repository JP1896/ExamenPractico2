//Objeto de conexion
const Sequelize = require("sequelize")
//const {aplicarRelaciones} = require('./relations')
//Nombre de la base, usuario, contraseña, 
const sequelize = new Sequelize('user5DB','user5','root',{
    dialect: 'mysql', 
    host: '54.198.161.35', //IP
    define:{
        //Evitar que nos ponga los createdAt y updatedAT
        timestamps:false,
        //Evitar plural
        freezeTableName: true        
    }    
})
const modelDefiners = [
    require('../models/ciudad')
]
//Adherir los modelos al objeto de conexion que es sequelize
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}
//Realizar las relaciones entre las tablas de la base de datos
//aplicarRelaciones(sequelize)

module.exports = sequelize
