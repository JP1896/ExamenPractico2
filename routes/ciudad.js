const express = require("express")
const cController = require('../controllers/ciudad')
const router = express.Router()

router.post('/agregarCiudad',cController.postAgregarCiudad)
router.get('/obtenerCiudad',cController.getObtenerCiudad)
router.post('/borrarCiudad',cController.postBorrarCiudad)
router.post('/actualizarCiudad',cController.postActualizarCiudad)

module.exports = router    
