const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) => {
    var criteria = {};
    if((req.query.monedaOrigen != null) && (req.query.monedaDestino !=null)){
        criteria.monedaOrigen = req.query.monedaOrigen;
        criteria.monedaDestino = req.query.monedaDestino;
    }
    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async (req, res) => {
    var transaccion = await Transaccion.findOne({email: req.params.email});
    res.json(transaccion);
}

transaccionCtrl.postTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'transaccion guardada'
        })
    
    }catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al procesar la transaccion'
        })

    }

}

module.exports = transaccionCtrl;