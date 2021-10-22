const path = require('path')
const ciudad = require('../utils/database').models.ciudad

exports.postAgregarCiudad = (req,res)=>{
    console.log(req,body)
    ciudad.create(req.body)
        .then(vj=>{
            console.log("Registro Exitoso")
            res.json({estado:"aceptado"})
        })
}

exports.getObtenerCiudad = (req,res)=>{
    ciudad.findAll()
        .then(ciudad =>{
            console.log(ciudad)
            res.json(ciudad)
        })
        .catch(err=>console.log(err))
}

exports.postActualizarCiudad = (req,res)=>{
    console.log(req.body)
    ciudad.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Ciudada Actualizada")
        res.json({estado: "Correcto ! "})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "Error ! "})
    })
}

exports.postBorrarCiudad = (req,res)=>{
    console.log(req.body)
    ciudad.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Ciudada Eliminada")
        res.json({estado: "Correcto ! "})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "Error !"})
    })
}
