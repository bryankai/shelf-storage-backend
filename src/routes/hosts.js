const express = require('express')

const router = express.Router()
const hostsController = require('../controllers/hosts')

////////////////////////////////////////////////////////////////////
// HOSTS
////////////////////////////////////////////////////////////////////

// Need to test

router.post('/', hostsController.createHost)
router.get('/', hostsController.getAllHosts)
router.get('/:id', hostsController.getOneHost)

////////////////////////////////////////////////////////////////////
// Hosts/Spaces
////////////////////////////////////////////////////////////////////

// All working

router.post('/:id/spaces', hostsController.createSpace)
router.get('/:id/spaces', hostsController.getAllSpacesByHostId)
router.get('/:id/spaces/:spaceId', hostsController.getOneSpace)
router.put('/:id/spaces/:spaceId', hostsController.editSpace)
router.patch('/:id/spaces/:spaceId', hostsController.activateSpace)

////////////////////////////////////////////////////////////////////
// Hosts/Spaces/Orders
////////////////////////////////////////////////////////////////////

// Need to test

router.get('/:id/spaces/:spaceId/orders', hostsController.getAllOrdersBySpaceId)
// router.get('/:id/spaces/:spaceId/orders/:orderId', hostsController.getOneOrder)
// router.put('/:id/spaces/:spaceId/orders/:orderId', hostsController.editOrder)

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
