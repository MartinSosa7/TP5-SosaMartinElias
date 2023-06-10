const mongoose = require('mongoose');
const {Schema} = mongoose;
const Espectador = require('./espectador');
const TicketSchema = new Schema({
    precioTicket: {type: Number},
    categoriaEspectador: {type: String},
    fechaCompra: {type: String}, 
    espectador: {type: Schema.Types.ObjectId, ref: Espectador, required: true}
})

module.exports = mongoose.model('Ticket',TicketSchema);