const usersModel = require('../models/users')

////////////////////////////////////////////////////////////////////
// USERS
////////////////////////////////////////////////////////////////////

function createUser(req, res, next){
  if(!req.body.first_name){
    return next({ status: 400, message: 'Please provide first_name'})
  }
  if(!req.body.last_name){
    return next({ status: 400, message: 'Please provide last_name'})
  }
  if(!req.body.password){
    return next({ status: 400, message: 'Please provide password'})
  }
  if(!req.body.email){
    return next({ status: 400, message: 'Please provide email'})
  }
  usersModel.createUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllUsers(req, res, next) {
  usersModel.getAllUsers()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneUser(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  usersModel.getOneUser(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// DAILIES
////////////////////////////////////////////////////////////////////

function createDaily(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }

  usersModel.createDaily(req.params.id, req.body.name)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllDailies(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  usersModel.getAllDailies(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  const {keyName} = req.body
  usersModel.getOneDaily(req.params.id, req.params.dailyId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function editDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }
  if(!req.body.streak){
    return next({ status: 400, message: 'Please provide streak'})
  }
  usersModel.editDaily(
    req.params.id,
    req.params.dailyId,
    req.body.name,
    req.body.streak
  )
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function patchDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(req.body.streak || req.body.archived) {
    usersModel.patchDaily(
      req.params.dailyId,
      req.body,
    )
    .then(function(data){
      return res.status(200).send({ data })
    })
    .catch(next)
  } else {
    return next({ status: 400, message: 'Please provide streak or archived'})
  }
}

function removeDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  usersModel.removeDaily(req.params.id, req.params.dailyId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// DAILY HISTORY
////////////////////////////////////////////////////////////////////

function createDailyHistory(req, res, next){
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(typeof req.body.completed === undefined){
    return next({ status: 400, message: 'Please provide completed status'})
  }
  usersModel.createDailyHistory(req.params.dailyId, req.body.completed)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getMostRecentDailyHistoryForToday(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  usersModel.getMostRecentDailyHistoryForToday(
    req.params.id,
    req.params.dailyId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getCurrentStreak(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  usersModel.getCurrentStreak(
    req.params.dailyId, req.body.daysAgo)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneDailyHistory(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(!req.params.dailyHistoryId){
    return next({ status: 400, message: 'Please provide dailyHistoryId'})
  }

  usersModel.getOneDailyHistory(req.params.id, req.params.dailyId, req.params.dailyHistoryId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


function patchDailyHistory(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(!req.params.dailyHistoryId){
    return next({ status: 400, message: 'Please provide dailyHistoryId'})
  }
  if(!req.body.completed){
    return next({ status: 400, message: 'Please provide completed'})
  }

  usersModel.patchDailyHistory(
    req.params.dailyHistoryId,
    req.body.completed,
  )
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


////////////////////////////////////////////////////////////////////
// DUELS
////////////////////////////////////////////////////////////////////

function createDuel(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId.'})
  }
  if(!req.body.u2_id){
    return next({ status: 400, message: 'Please provide u2_id.'})
  }
  if(!req.body.startTime){
    return next({ status: 400, message: 'Please provide startTime.'})
  }
  if(!req.body.endTime){
    return next({ status: 400, message: 'Please provide endTime.'})
  }
  if(!req.body.dailies){
    return next({ status: 400, message: 'Please provide an array of dailies containing dailies for both users.'})
  }

  usersModel.createDuel(
    req.params.id,
    req.body.u2_id,
    req.body.startTime,
    req.body.endTime,
    req.body.dailies
  )
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllUserDuels(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  usersModel.getAllUserDuels(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneDuel(req, res, next) {
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  usersModel.getOneDuel(req.params.duelId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function editDuel(req, res, next){
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.body.u2_id){
    return next({ status: 400, message: 'Please provide u2_id'})
  }
  if(!req.body.startTime){
    return next({ status: 400, message: 'Please provide startTime'})
  }
  if(!req.body.endTime){
    return next({ status: 400, message: 'Please provide endTime'})
  }
  if(!req.body.u2_accepted){
    return next({ status: 400, message: 'Please provide u2_accepted'})
  }
  if(!req.body.u1_confirmed){
    return next({ status: 400, message: 'Please provide u1_confirmed'})
  }
  if(!req.body.rejected){
    return next({ status: 400, message: 'Please provide rejected'})
  }
  if(!req.body.winnerId){
    return next({ status: 400, message: 'Please provide winnerId'})
  }
  usersModel.editDuel(
    req.params.duelId,
    req.params.id,
    req.body.u2_id,
    req.body.startTime,
    req.body.endTime,
    req.params.u2_accepted,
    req.body.u1_confirmed,
    req.body.rejected,
    req.body.winnerId
  )
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}


function patchDuel(req, res, next) {
  let patchDuelReturn = null
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  if(req.body.u2_accepted || req.body.u1_confirmed || req.body.rejected || req.body.winnerId || req.body.archived) {
    usersModel.patchDuel(
      req.params.duelId,
      req.body
    )
    .then(function(data){
      patchDuelReturn = data
      if(req.body.dailies){
        console.log(req.body.dailies, req.params.duelId)
        usersModel.addDuelDailies(
          req.params.duelId,
          req.body.dailies
        )
      }
    })
    .then(function(data){
      return res.status(200).send({ data, patchDuelReturn })
    })
    .catch(next)
  } else if (req.body.dailies){

  }else {
    return next({ status: 400, message: 'Please provide a parameter to be patched'})
  }
}


function removeDuel(req, res, next) {
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  usersModel.removeDuel(req.params.duelId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// DUEL_DAILIES
////////////////////////////////////////////////////////////////////

function getAllDuelDailies(req, res, next) {
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  usersModel.getAllDuelDailies(req.params.duelId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////

module.exports = {
  // Users
  createUser,
  getAllUsers,
  getOneUser,
  // Dailies
  createDaily,
  getAllDailies,
  getOneDaily,
  editDaily,
  patchDaily,
  // Daily History
  createDailyHistory,
  getMostRecentDailyHistoryForToday,
  getCurrentStreak,
  getOneDailyHistory,
  patchDailyHistory,
  // Duels
  createDuel,
  getAllUserDuels,
  getOneDuel,
  patchDuel,
  editDuel,
  // Duel dailies
  getAllDuelDailies
}
