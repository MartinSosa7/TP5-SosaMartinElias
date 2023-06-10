const mongoose = require('mongoose');
const {Schema} = mongoose;
const TransaccionSchema = new Schema({
    monedaOrigen: { type: String},
    cantidadOrigen: { type: Number},
    monedaDestino: {type: String},
    cantidadDestino: {type: Number},
    emailCliente: { type: String},
    tasaConversion: {type: Number}

})
module.exports = mongoose.model('Transaccion', TransaccionSchema);