const TABLE_NAME = 'hosts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Ariel', last_name: 'Anderson', email: 'ariel@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 2, first_name: 'Bob', last_name: 'Bolt', email: 'bob@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 3, first_name: 'Cathleen', last_name: 'Chase', email: 'cathleen@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 4, first_name: 'Daniel', last_name: 'Doppler', email: 'daniel@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 5, first_name: 'Emily', last_name: 'Everett', email: 'emily@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

// user email test@gmail.com
// user password 123
