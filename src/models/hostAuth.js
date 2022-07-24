// const db = require('../../db')
const bcrypt = require("bcrypt");
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

function hostLogin(email, password) {
  let hostUser;
  // 1. Check to see if hostUser already exists
  return hostModel
    .getHostByEmail(email)
    .then(function (data) {
      // 1a. if not, return a 400 with appropriate error message
      if (!data) throw { status: 400, message: "Bad Request" };
      // save hostUser for later use
      hostUser = data;
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
      delete hostUser.hashed_password;
      // 5. "return/continue" promise
      console.log("hostUser", hostUser);
      return hostUser;
    });
}

module.exports = {
  hostLogin,
};
