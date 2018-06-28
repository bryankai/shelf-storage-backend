const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

////////////////////////////////////////////////////////////////////
// Guests
////////////////////////////////////////////////////////////////////


function getAllGuests(guests_id){
  return (
    knex('guests')
  )
}

function getGuestByEmail(email){
  return (
    knex('guests')
    .where({ email })
    .first()
  )
}

function getOneGuest(id){
  return (
    knex('guests')
    .where({ id })
    .first()
  )
}

function createGuest(first_name, last_name, email, password){
  return getGuestByEmail(email)
  .then(function(data){
    if(data) throw { status: 400, message:'Email already being used'}
    const hp = bcrypt.hash(password, 10)
    return hp
  })
  .then(function(hashedPassword){
    return (
      knex('guests')
      .insert({ first_name, last_name, email, hashed_password: hashedPassword })
      .returning('*')
      .then(function([data]){
        return data
      })
    )
  })
}

////////////////////////////////////////////////////////////////////
// ORDERS
////////////////////////////////////////////////////////////////////

function createOrder(
  guests_id,
  spaces_id,
  start_date,
  end_date,
  total_cost
) {
  return (
    knex('orders')
    .insert({
      guests_id,
      spaces_id,
      start_date,
      end_date,
      total_cost
     })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllOrdersByGuestId(guests_id){
  return (
    knex('orders')
    .where({ guests_id })
    .join('guests', 'guests.id', 'orders.guests_id')
    .returning('*')
  )
}

function getOneOrder(id){
  return (
    knex('orders')
    .where({ id })
    .first()
  )
}

function cancelOrderByGuest(id, cancelled_at){
  return (
    knex('orders')
    .where({ id })
    .update({ cancelled_at })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // Guests
  createGuest,
  getAllGuests,
  // getGuestByEmail,
  getOneGuest,
  // // Orders
  getAllOrdersByGuestId,
  // getOneOrder,
  // cancelOrderByGuest
}
