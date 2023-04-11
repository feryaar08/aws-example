var express = require('express');
var router = express.Router();
const control= require('../controlador/control')

router.get('/inicio', control.enseñarPaginaPrincipal)

module.exports = router;