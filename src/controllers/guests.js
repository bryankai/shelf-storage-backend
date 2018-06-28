const guestsModel = require('../models/guests')

////////////////////////////////////////////////////////////////////
// GUESTS
////////////////////////////////////////////////////////////////////

function createGuest(req, res, next){
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
  guestsModel.createGuest(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllGuests(req, res, next) {
  guestsModel.getAllGuests()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneGuest(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  guestsModel.getOneGuest(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Guests/Guests/Orders
////////////////////////////////////////////////////////////////////

function createOrder(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide guestId'})
  }
  if(!req.body.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  if(!req.body.startDate){
    return next({ status: 400, message: 'Please provide startDate'})
  }
  if(!req.body.endDate){
    return next({ status: 400, message: 'Please provide endDate'})
  }
  if(!req.body.totalCost){
    return next({ status: 400, message: 'Please provide totalCost'})
  }

  guestsModel.createOrder(req.params.id, req.body.spaceId, req.body.startDate, req.body.endDate, req.body.totalCost)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllOrdersByGuestId(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  guestsModel.getAllOrdersByGuestId(req.params.id)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getOneOrder(req, res, next) {
  if(!req.params.orderId){
    return next({ status: 400, message: 'Please provide orderId'})
  }

  guestsModel.getOneOrder(req.params.orderId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


function cancelOrderByGuest(req, res, next) {
  if(!req.params.orderId){
    return next({ status: 400, message: 'Please provide orderId'})
  }
  if(!req.body.cancelledAt){
    return next({ status: 400, message: 'Please provide cancelled_at'})
  }

  guestsModel.cancelOrderByGuest(
    req.params.orderId,
    req.body.cancelledAt,
  )
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}



////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////

module.exports = {
  // Guests
  createGuest,
  getAllGuests,
  getOneGuest,
  // Orders
  createOrder,
  getAllOrdersByGuestId,
  getOneOrder,
  cancelOrderByGuest
}
