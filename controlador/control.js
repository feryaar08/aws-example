const conexion = require('../config/conexion')
const modelo = require('../modelo/modelo')

module.exports={
    enseñarPaginaPrincipal:(req,res)=>{
        modelo.mostrarProductos(conexion, (err,datos)=>{
            res.render('inicio/index', {imagenes: datos})
        })
    },
    verCrud: (req,res)=>{
        modelo.obtener(conexion, (err,datos)=>{
            res.render('index/crud', {coleccionable: datos})
        }) 
    },
    mostrar: (req,res)=>{
        res.render('index/mostrar')
    },
    mostrarCrud:(req,res)=>{
        modelo.insertarProductos(conexion, req.body, req.file)
        res.redirect('/productos')
    },
    eliminar:(req,res)=>{
        modelo.eliminarProductos(conexion, req.params.id)
        res.redirect('/productos')
    },
    editar:(req,res)=>{
        modelo.regresarDatos(conexion, req.params.id, (err,registros)=>{
            res.render('index/editar', {tenis: registros[0]})
        })
    },
    actualizar:(req,res)=>{
        if(req.body.nombre || req.body.descripcion || req.body.tallaCinco || req.body.tallaCinco || req.body.tallaSeis || req.body.tallaSiete || req.body.tallaOcho || req.body.tallaNueve || req.body.tallaDiez){
            modelo.actualizarDatos(conexion,req.body, (err)=>{
            })
        } 
        if(req.file){
            if(req.file.filename){
                modelo.actualizarImagen(conexion, req.body, req.file)
            }
        }
        res.redirect('/productos')
    },

    mostrarProductos:(req,res)=>{
        modelo.obtener(conexion, (err,datos)=>{
            res.render('index/productos', {coleccionable: datos})
        }) 
    },
    mostrarNosotros:(req,res)=>{
        res.render('index/nosotros')
    }

}