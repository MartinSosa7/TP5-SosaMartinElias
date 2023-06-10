const espectadorCtrl = require('../controllers/espectador.controller');
const express = require('express');
const router = express.Router();

router.post('/',espectadorCtrl.postEspectador);
router.get('/', espectadorCtrl.getEspectadores);
router.get('/:dni', espectadorCtrl.getEspectador);

module.exports = router;