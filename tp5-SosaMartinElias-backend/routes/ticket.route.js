const ticketCtrl = require('../controllers/ticket.controller');
const express = require('express');
const router = express.Router();

router.post('/',ticketCtrl.postTicket);
router.get('/', ticketCtrl.getTickets);
router.get('/:id',ticketCtrl.getTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/', ticketCtrl.putTicket);

module.exports = router;