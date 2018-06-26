// const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Login
//
// 1. Check to see if user already exists
//   a. if not, return a 400 with appropriate error message
// 2. compare password in the database with the password provided by user
// 3. If the passwords do not match, respond with 401 Unauthorized
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function login(email, password){
  let user
  // 1. Check to see if user already exists
  return userModel.getUserByEmail(email)
  .then(function(data){
    // 1a. if not, return a 400 with appropriate error message
    if(!data) throw { status: 400, message: "Bad Request"}
    // save user for later use
    user = data
    // 2. compare password in the database with the password provided by user
    return bcrypt.compare(password, data.hashed_password)
    // password is not hashed. bcrypt hashes it then compares it
    // data.password is hashed
  })
  .catch(bcrypt.MISMATCH_ERROR, function(){
    // 3. If the passwords do not match, respond with 401 Unauthorized
    throw { status: 401, message: "Unauthorized"}
  })
  .then(function(){
    // 4. strip hashed password away from object
    delete user.hashed_password
    // 5. "return/continue" promise
    return user
  })
}

module.exports = {
  login
}
