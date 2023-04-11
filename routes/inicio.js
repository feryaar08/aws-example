var express = require('express');
var router = express.Router();
const controlador = require('../controlador/control')
const multer = require('multer')

let fecha = Date.now()
let ruta = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'./public/images/')
    },
    filename: (req, file, callback)=>{
        console.log(file)
        callback(null, fecha + "_" + file.originalname)
    }
})

let cargar = multer({storage:ruta})
router.get('/productos', controlador.verCrud)
router.get('/mostrar', controlador.mostrar)
router.post('/mostrar',cargar.single("imagen"), controlador.mostrarCrud)
router.post('/eliminar/:id', controlador.eliminar)
router.get('/editar/:id', controlador.editar)
router.post('/actualizar', cargar.single("imagen"),controlador.actualizar)
router.get('/mostrarProductos', controlador.mostrarProductos)
router.get('/nosotros', controlador.mostrarNosotros)


module.exports = router;