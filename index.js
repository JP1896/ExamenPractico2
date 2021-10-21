const path = require("path")
const express = require ('express')

const sequelize = require('./utils/database')
const cRoutes = require('./routes/ciudad')

const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())


app.use('/ciudad',cRoutes) 


sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en puerto 8080")
        })
    )
    .catch(err=>console.log(err))
