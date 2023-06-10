const Espectador = require("../models/espectador");
const espectadorCtrl = {};

espectadorCtrl.postEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try{
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'espectador guardado correctamente'
        })
    }
    catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al intentar guardar espectador'
        })


    }
}

espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.getEspectador = async (req, res) => {
    var espectador = await Espectador.findOne(req.query.dni);
    res.json(espectador);
}

module.exports = espectadorCtrl;