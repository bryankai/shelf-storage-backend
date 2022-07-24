// const db = require('../../db')
const bcrypt = require("bcrypt");
const guestModel = require("./guests");
const hostModel = require("./hosts");

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

function login(email, password) {
  let guestUser;
  // 1. Check to see if guestUser already exists
  return guestModel
    .getGuestByEmail(email)
    .then(function (data) {
      // 1a. if not, return a 400 with appropriate error message
      if (!data) throw { status: 400, message: "Bad Request" };
      // save guestUser for later use
      guestUser = data;
      // 2. compare password in the database with the password provided by user
      return bcrypt.compare(password, data.hashed_password);
      // password is not hashed. bcrypt hashes it then compares it
      // data.password is hashed
    })
    .catch(bcrypt.MISMATCH_ERROR, function () {
      // 3. If the passwords do not match, respond with 401 Unauthorized
      throw { status: 401, message: "Unauthorized" };
    })
    .then(function () {
      // 4. strip hashed password away from object
      delete guestUser.hashed_password;
      // 5. "return/continue" promise
      console.log("guestUser", guestUser);
      return guestUser;
    });
}

// HOST

function hostLogin(email, password) {
  let guestUser;
  // 1. Check to see if guestUser already exists
  return hostModel
    .getGuestByEmail(email)
    .then(function (data) {
      // 1a. if not, return a 400 with appropriate error message
      if (!data) throw { status: 400, message: "Bad Request" };
      // save guestUser for later use
      guestUser = data;
      // 2. compare password in the database with the password provided by user
      return bcrypt.compare(password, data.hashed_password);
      // password is not hashed. bcrypt hashes it then compares it
      // data.password is hashed
    })
    .catch(bcrypt.MISMATCH_ERROR, function () {
      // 3. If the passwords do not match, respond with 401 Unauthorized
      throw { status: 401, message: "Unauthorized" };
    })
    .then(function () {
      // 4. strip hashed password away from object
      delete guestUser.hashed_password;
      // 5. "return/continue" promise
      console.log("guestUser", guestUser);
      return guestUser;
    });
}

module.exports = {
  login,
  hostLogin,
};
