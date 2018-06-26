exports.seed = function(knex, Promise) {
  // Deletes ALL data from each of the tables
  // This is necessary so you can seed multiple times
  // Goes in reverse order so it deletes the children before the parent
  return knex('hosts').del()
    // .then(function() {
    //   return knex('duels').del()
    // })
    // .then(function() {
    //   return knex('daily_history').del()
    // })
    // .then(function() {
    //   return knex('hosts').del()
    // })
    .then(function() {
      return knex('guests').del()
    })
};
