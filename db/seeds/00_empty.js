exports.seed = function(knex, Promise) {
  // Deletes ALL data from each of the tables
  // This is necessary so you can seed multiple times
  // Goes in reverse order so it deletes the children before the parent
  return knex('orders').del()
    .then(function() {
      return knex('spaces').del()
    })
    .then(function() {
      return knex('hosts').del()
    })
    .then(function() {
      return knex('guests').del()
    })
};
