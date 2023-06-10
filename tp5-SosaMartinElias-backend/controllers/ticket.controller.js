const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.postTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try{
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'ticket guardado'
        })
    }catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al intentar guardar ticket'
        })

    }
    
}

ticketCtrl.getTickets = async (req, res) => {
    let criteria = {};
    if(req.query.categoriaEspectador != null){
        criteria.categoriaEspectador = req.query.categoriaEspectador;
    }
    var tickets = await Ticket.find(criteria);
    res.json(tickets);
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }

}

ticketCtrl.putTicket = async (req, res) => {
    var nuevoTicket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.params.id }, nuevoTicket);
        res.json({
            status: '1',
            msg: 'Ticket actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }

}

module.exports = ticketCtrl;