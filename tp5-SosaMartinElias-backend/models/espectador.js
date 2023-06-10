const mongoose = require('mongoose');
const {Schema} = mongoose;
const EspectadorSchema = new Schema({
    apellido: {type: String},
    nombre: {type: String},
    dni: {type: String},
    email: {type: String}
})
module.exports = mongoose.model('Espectador', EspectadorSchema);