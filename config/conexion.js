const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'database-1.cczwvu18tdpj.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '222241068',
    port: '3306',
    database: 'productos'
  });

conexion.connect(
    (err)=>{
        if(!err){
            console.log('conexion establecida')
        }else{
            console.log('error de conexion')
        }
    }
)
module.exports = conexion