const hostAuthModel = require('../models/hostAuth')
const jwt = require('jsonwebtoken')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// Login Controller
//
// 1. Make sure that request is good
// 2. Attempt Loginauth
// 3. Create token
// 4. Send back token
//////////////////////////////////////////////////////////////////////////////

function hostLogin(req, res, next){
  // 1. Make sure that request is good
  if(!req.body.email){
    return next({ status: 400, message: 'Bad request'})
  }
  if(!req.body.password){
    return next({ status: 400, message: 'Bad request'})
  }

  hostAuthModel.hostLogin(req.body.email, req.body.password)
  .then(function(user){
    console.log ('User:',user)
    console.log('Host Secret:', process.env.HOST_SECRET)
    // 3. Create token
    const token = jwt.sign({id: user.id, name: user.first_name}, process.env.HOST_SECRET)
    console.log(token)
    // 4. Send back token
    return res.status(200).send({ token })
  })
  .catch(next)
}


function getAuthStatus(req, res, next){
    res.status(200).send(req.claim)
}


//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

function isAuthenticated(req, res, next){
  if(!req.headers.authorization){
    return next({ status: 401, message: 'Unauthorized' })
  }
  const [scheme, credentials] = req.headers.authorization.split(' ')



  jwt.verify(credentials, process.env.HOST_SECRET, (err, payload)=>{
    if(err){
      return next({ status: 401, message: 'Unauthorized' })
    }
    req.claim = payload
    next()
  })
}

function isSelf(req, res, next){
  if(parseInt(req.params.userId) !== req.claim.id){
    return next({ status: 401, message: 'Unauthorized' })
  }
  next()
}


module.exports = {
  hostLogin,
  getAuthStatus,
  isAuthenticated,
  isSelf
}
