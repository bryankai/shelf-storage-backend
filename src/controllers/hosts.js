const hostsModel = require('../models/hosts')

////////////////////////////////////////////////////////////////////
// HOSTS
////////////////////////////////////////////////////////////////////

function createHost(req, res, next){
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
  hostsModel.createHost(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllHosts(req, res, next) {
  hostsModel.getAllHosts()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneHost(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  hostsModel.getOneHost(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Hosts/Spaces
////////////////////////////////////////////////////////////////////

function createSpace(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }
  if(!req.body.description){
    return next({ status: 400, message: 'Please provide description'})
  }
  if(!req.body.address){
    return next({ status: 400, message: 'Please provide address'})
  }
  if(!req.body.city){
    return next({ status: 400, message: 'Please provide city'})
  }
  if(!req.body.state){
    return next({ status: 400, message: 'Please provide state'})
  }
  if(!req.body.zip){
    return next({ status: 400, message: 'Please provide zip code'})
  }

  const {name, description, img_link, address, city, state, zip, temp_control, access, size, price} = req.body

  hostsModel.createSpace(name, description, img_link, req.params.id, address, city, state, zip, temp_control, access, size, price)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllSpacesByHostId(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  hostsModel.getAllSpacesByHostId(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneSpace(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  const {keyName} = req.body
  hostsModel.getOneSpace(req.params.id, req.params.spaceId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function editSpace(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }
  if(!req.body.description){
    return next({ status: 400, message: 'Please provide description'})
  }
  if(!req.body.address){
    return next({ status: 400, message: 'Please provide address'})
  }
  if(!req.body.city){
    return next({ status: 400, message: 'Please provide city'})
  }
  if(!req.body.state){
    return next({ status: 400, message: 'Please provide state'})
  }
  if(!req.body.zip){
    return next({ status: 400, message: 'Please provide zip code'})
  }
  const {name, description, img_link, address, city, state, zip, temp_control, access, size, price} = req.body

  hostsModel.editSpace(req.params.spaceId, name, description, img_link, address, city, state, zip, temp_control, access, size, price)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function activateSpace(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  if(typeof req.body.active !== 'boolean') {
    return next({ status: 400, message: 'Please provide new active status'})
  }
  hostsModel.activateSpace(req.params.id, req.params.spaceId, req.body.active)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function removeSpace(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide hostId'})
  }
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  hostsModel.removeSpace(req.params.id, req.params.spaceId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Hosts/Spaces/Orders
////////////////////////////////////////////////////////////////////

function createOrder(req, res, next){
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }
  if(!req.params.guestId){
    return next({ status: 400, message: 'Please provide guestId'})
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

  hostsModel.createOrder(req.params.spaceId, req.params.spaceId, req.body.startDate, req.body.endDate, req.body.totalCost)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllOrdersBySpaceId(req, res, next){
  if(!req.params.spaceId){
    return next({ status: 400, message: 'Please provide spaceId'})
  }

  hostsModel.getAllOrdersBySpaceId(req.params.spaceId)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getOneOrder(req, res, next) {
  if(!req.params.orderId){
    return next({ status: 400, message: 'Please provide orderId'})
  }

  hostsModel.getOneOrder(req.params.orderId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


function cancelOrderByHost(req, res, next) {
  if(!req.params.orderId){
    return next({ status: 400, message: 'Please provide orderId'})
  }
  if(!req.body.cancelled_at){
    return next({ status: 400, message: 'Please provide cancelled_at'})
  }

  hostsModel.cancelOrderByHost(
    req.params.orderId,
    req.body.cancelled_at,
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
  // Hosts
  createHost,
  getAllHosts,
  getOneHost,
  // Spaces
  createSpace,
  getAllSpacesByHostId,
  getOneSpace,
  editSpace,
  activateSpace,
  // Space History
  createOrder,
  getAllOrdersBySpaceId,
  getOneOrder,
  cancelOrderByHost
}
