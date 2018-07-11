const TABLE_NAME = 'orders'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, guests_id: 1, spaces_id: 1, start_date: '2018-07-20T00:00:00', end_date: '2018-08-04T11:59:59', cancelled_at: null, total_cost: 100},
        {id: 2, guests_id: 2, spaces_id: 1, start_date: '2018-08-11T00:00:00', end_date: '2018-08-15T11:59:59', cancelled_at: null, total_cost: 30},
        {id: 3, guests_id: 3, spaces_id: 1, start_date: '2018-08-25T00:00:00', end_date: '2018-08-31T11:59:59', cancelled_at: null, total_cost: 50},
        {id: 4, guests_id: 4, spaces_id: 2, start_date: '2018-06-01T00:00:00', end_date: '2018-08-31T11:59:59', cancelled_at: null, total_cost: 500},
        {id: 5, guests_id: 5, spaces_id: 2, start_date: '2018-09-25T00:00:00', end_date: '2018-09-30T11:59:59', cancelled_at: null, total_cost: 50},
        {id: 6, guests_id: 1, spaces_id: 2, start_date: '2018-07-20T00:00:00', end_date: '2018-08-04T11:59:59', cancelled_at: null, total_cost: 100},
        {id: 7, guests_id: 1, spaces_id: 3, start_date: '2018-08-11T00:00:00', end_date: '2018-08-15T11:59:59', cancelled_at: null, total_cost: 30},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
