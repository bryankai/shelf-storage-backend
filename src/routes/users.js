const express = require('express')

const router = express.Router()
const userController = require('../controllers/users')

////////////////////////////////////////////////////////////////////
// USERS
////////////////////////////////////////////////////////////////////
//Users routes work

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)

////////////////////////////////////////////////////////////////////
// DAILIES
////////////////////////////////////////////////////////////////////

// All dailies routes work properly

router.post('/:id/dailies', userController.createDaily)
router.get('/:id/dailies', userController.getAllDailies)
router.get('/:id/dailies/:dailyId', userController.getOneDaily)
router.put('/:id/dailies/:dailyId', userController.editDaily)
router.patch('/:id/dailies/:dailyId', userController.patchDaily)
// Don't want to delete, just archive

////////////////////////////////////////////////////////////////////
// DAILY HISTORY
////////////////////////////////////////////////////////////////////

// Post and get work

router.post('/:id/dailies/:dailyId/dailyHistory', userController.createDailyHistory)
router.get('/:id/dailies/:dailyId/dailyHistory', userController.getMostRecentDailyHistoryForToday)
router.patch('/:id/dailies/:dailyId/dailyHistory/streak', userController.getCurrentStreak)
router.get('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.getOneDailyHistory)
router.patch('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.patchDailyHistory)
// Don't want to delete, just archive

////////////////////////////////////////////////////////////////////
// DUELS
////////////////////////////////////////////////////////////////////

router.post('/:id/duels', userController.createDuel)
router.get('/:id/duels', userController.getAllUserDuels)
router.get('/:id/duels/:duelId', userController.getOneDuel)
router.put('/:id/duels/:duelId', userController.editDuel)
router.patch('/:id/duels/:duelId', userController.patchDuel)
// Don't want to delete, just archive

////////////////////////////////////////////////////////////////////
// DUEL_DAILIES
////////////////////////////////////////////////////////////////////

router.get('/:id/duels/:duelId/duel_dailies', userController.getAllDuelDailies)


////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
