const express = require('express')

const router = express.Router()
const guestsController = require('../controllers/guests')

////////////////////////////////////////////////////////////////////
// Guests
////////////////////////////////////////////////////////////////////

// Tested
router.post('/', guestsController.createGuest)
router.get('/', guestsController.getAllGuests)
router.get('/:id', guestsController.getOneGuest)

////////////////////////////////////////////////////////////////////
// Guests/Orders
////////////////////////////////////////////////////////////////////

// router.get('/:id/orders', guestsController.getAllOrdersByGuestId)
// router.get('/:id/orders/:orderId', guestsController.getOneOrder)
// router.patch('/:id/orders/:orderId', guestsController.cancelOrderByGuest)

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
