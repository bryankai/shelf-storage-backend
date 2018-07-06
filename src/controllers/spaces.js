const spacesModel = require('../models/spaces')


////////////////////////////////////////////////////////////////////
// Spaces
////////////////////////////////////////////////////////////////////

function getAllSpaces(req, res, next) {

  spacesModel.getAllSpaces()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneSpace(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  const {keyName} = req.body
  spacesModel.getOneSpace(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////å////////

module.exports = {
  // Spaces
  getAllSpaces,
  getOneSpace
}
