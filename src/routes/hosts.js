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

// Need to test

router.post('/:id/spaces', hostsController.createSpace)
router.get('/:id/spaces', hostsController.getAllSpacesByHostId)
router.get('/:id/spaces/:spaceId', hostsController.getOneSpace)
// router.put('/:id/spaces/:spaceId', hostsController.editSpace)
router.patch('/:id/spaces/:spaceId', hostsController.activateSpace)


////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
