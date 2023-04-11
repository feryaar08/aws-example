//importacion de modulos
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ejs = require('ejs')
const  path = require('path');
const multer = require('multer')

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extends: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const inicio = require('./routes/inicio');
const indexRouter = require('./routes/index')
app.use('/', inicio);
app.use('/', indexRouter)

app.listen(3000, (req,res)=>{
    console.log("Servidor escuchando en el puerto 3000")
})

module.exports = app;