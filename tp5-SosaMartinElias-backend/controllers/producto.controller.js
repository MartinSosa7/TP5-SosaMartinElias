const Producto = require("../models/producto");
const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    var criteria = {};
    if(req.query.destacado != null && req.query.destacado != ''){
        criteria.destacado = req.query.destacado;
    }
    var productos = await Producto.find(criteria);
    res.json(productos);
}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Agente guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.editProducto = async (req, res) => {
    const productoeditado = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, productoeditado);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = productoCtrl;
