const transaccionCtrl = require('./../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();

router.post('/', transaccionCtrl.postTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/:email', transaccionCtrl.getTransaccion);

module.exports = router;