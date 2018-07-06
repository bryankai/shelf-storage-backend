const knex = require('../../db/knex');

////////////////////////////////////////////////////////////////////
// Spaces
////////////////////////////////////////////////////////////////////

function getAllSpaces(){
  return (
    knex('spaces')
    // .where({  })
    // .returning('*')
  )
}

function getOneSpace(id){
  return (
    knex('spaces')
    .where({ 'spaces.id': id })
    .first()
    .join('hosts', 'hosts.id', 'spaces.hosts_id')
    .select(
      'spaces.id as id',
      'spaces.name as name',
      'spaces.description as description',
      'spaces.img_link as img_link',
      'spaces.hosts_id as hosts_id',
      'spaces.address as address',
      'spaces.city as city',
      'spaces.state as state',
      'spaces.address as address',
      'spaces.zip as zip',
      'spaces.temp_control as temp_control',
      'spaces.access as access',
      'spaces.size as size',
      'spaces.price as price',
      'spaces.active as active',
      'spaces.created_at as created_at',
      'spaces.updated_at as updated_at',
      'hosts.first_name as host_name',
      'hosts.avatar as avatar'
    )
  )
}

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // Spaces
  getAllSpaces,
  getOneSpace
}
