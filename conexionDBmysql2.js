const mysql = require('mysql2')

const configuracion = {
    host: '54.198.161.35', 
    port: 3306,
    user: 'user5', 
    password: 'root',
    database: 'user5DB'
}
const conexion = mysql.createConnection(configuracion);

conexion.execute('SELECT * FROM usuario',(error,resultado,campos)=>{
    console.log('Conexion exitosa')
    console.log(resultado)
})