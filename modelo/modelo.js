const conexion = require("../config/conexion")

module.exports ={
    obtener:(conexion,funcion)=>{
        conexion.query("SELECT * FROM producto1",funcion)
    },
    insertarProductos: (conexion, datos, archivos)=>{
        conexion.query("INSERT INTO producto1(nombre,categoria,cantidad,descripcion,precio,imagen) VALUES(?,?,?,?,?,?)",
        [datos.nombre, datos.categoria, datos.cantidad, datos.descripcion, datos.precio, archivos.filename])

    },
    eliminarProductos: (conexion, id)=>{
        conexion.query("DELETE FROM producto1 WHERE id=?", [id])
    },
    regresarDatos: (conexion, id, funcion)=>{
        conexion.query("SELECT * FROM producto1 WHERE id=?",[id],funcion)
    },
    actualizarDatos: (conexion, datos, funcion)=>{
        conexion.query("UPDATE producto1 SET nombre=?, categoria=?, cantidad=?, descripcion=?,precio=? WHERE id=?", 
        [datos.nombre, datos.categoria, datos.cantidad, datos.descripcion, datos.precio,datos.id], funcion)
    },
    actualizarImagen:(conexion, datos, archivo)=>{
        conexion.query("UPDATE producto1 SET imagen =? WHERE id= ?",[archivo.filename, datos.id])
    },
    mostrarProductos:(conexion, funcion)=>{
        conexion.query("SELECT imagen from producto1", funcion)
    },
    productosUsuario:(conexion, funcion)=>{
        conexion.query("SELECT * from producto1")
    }

}
