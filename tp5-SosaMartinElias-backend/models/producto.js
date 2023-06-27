const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    destacado: { type: Boolean, default: false }
})
module.exports = mongoose.model('Producto', ProductoSchema);