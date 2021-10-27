const express = require('express');
const router = express.Router();
/* const authorization = require('../middlewares/authorization');

// Define modules/handlers of API
router.use('/auth', require('./auth'));

// Middleware of Authorization
router.use(authorization); */
router.use('/canales', require('./canales'));
router.use('/capitulos', require('./capitulos'));
//router.use('/producciones',require('/producciones'));


module.exports = router;