const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

////////////////////////////////////////////////////////////////////
// Hosts
////////////////////////////////////////////////////////////////////


function getAllHosts(hosts_id){
  return (
    knex('hosts')
  )
}

function getHostByEmail(email){
  return (
    knex('hosts')
    .where({ email })
    .first()
  )
}

function getOneHost(id){
  return (
    knex('hosts')
    .where({ id })
    .first()
  )
}

function createHost(first_name, last_name, email, password){
  return getHostByEmail(email)
  .then(function(data){
    if(data) throw { status: 400, message:'Email already being used'}
    const hp = bcrypt.hash(password, 10)
    return hp
  })
  .then(function(hashedPassword){
    return (
      knex('hosts')
      .insert({ first_name, last_name, email, hashed_password: hashedPassword })
      .returning('*')
      .then(function([data]){
        return data
      })
    )
  })
}

////////////////////////////////////////////////////////////////////
// Hosts/Spaces
////////////////////////////////////////////////////////////////////

function createSpace(name, description, img_link, hosts_id, address, city, state, zip, temp_control, access, size, price) {
  return (
    knex('spaces')
    .insert({ name, description, img_link, hosts_id, address, city, state, zip, temp_control, access, size, price})
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllSpacesByHostId(hosts_id){
  return (
    knex('spaces')
    .where({ hosts_id })
    .join('hosts', 'hosts.id', 'spaces.hosts_id')
    .returning('*')
    // .select(
    //   'spaces.id as id',
    //   'spaces.name as name',
    //   'spaces.hosts_id as hosts_id',
    //   'spaces.active as active',
    //   'spaces.created_at as created_at',
    //   'spaces.updated_at as updated_at',
    //   'hosts.first_name'
    // )
    // .then(spaces => {
    //   const promiseSpaces = spaces.map(space => {
    //     return knex('orders').where('spaces_id', space.id)
    //   })
    //   return Promise.all(promiseSpaces)
    // })
  )
}

function getOneSpace(hosts_id, id){
  return (
    knex('spaces')
    .where({ hosts_id })
    .where({ id })
    .first()
  )
}

function editSpace(id, name, description, img_link, address, city, state, zip, temp_control, access, size, price){
  console.log(id, img_link)
  return (
    knex('spaces')
    .where({ id })
    .update({ name, description, img_link, address, city, state, zip, temp_control, access, size, price })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function activateSpace(hosts_id, id, active){
  return (
    knex('spaces')
    .where({ id })
    .update({ active })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

// ////////////////////////////////////////////////////////////////////
// // ORDERS
// ////////////////////////////////////////////////////////////////////

function createOrder(
  guests_id,
  spaces_id,
  start_date,
  end_date,
  total_cost
) {
  return (
    knex('orders')
    .insert({  })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllOrdersBySpaceId(spaces_id){
  return (
    knex('orders')
    .where({ spaces_id })
    .join('spaces', 'spaces.id', 'orders.spaces_id')
    .returning('*')
  )
}



////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // Hosts
  createHost,
  getAllHosts,
  getHostByEmail,
  getOneHost,
  // Spaces
  createSpace,
  getAllSpacesByHostId,
  getOneSpace,
  editSpace,
  activateSpace,
  // // Orders
  getAllOrdersBySpaceId,
  // getOneOrder,
  // patchOrder,
}
